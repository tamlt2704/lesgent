import React from 'react';
import PropTypes from 'prop-types';
import * as posenet from '@tensorflow-models/posenet'
import '../App.css'

const videoWidth = 900
const videoHeight = 700
const pointRadius = 3

function toTuple({x, y}) {
    return [x, y]
}

function drawKeyPoints (
    keypoints,
    minPoseConfidence,
    skeletonColor,
    canvasContext,
    scale=1
) {
    keypoints.forEach(keypoint => {
        if (keypoint.score >= minPoseConfidence) {
            const {x, y} = keypoint.position
            canvasContext.beginPath()
            canvasContext.arc( x * scale, y*scale, pointRadius, 0, 2 * Math.PI )
            canvasContext.fillStyle = skeletonColor
            canvasContext.fill()
        }
    })
}

function drawSegment (
    [firstX, firstY],
    [nextX, nextY],
    color,
    lineWidth,
    scale,
    canvasContext
) {
    canvasContext.beginPath()
    canvasContext.moveTo(firstX * scale, firstY * scale)
    canvasContext.lineTo(nextX * scale, nextY * scale)
    canvasContext.lineWidth = lineWidth
    canvasContext.strokeStyle = color
    canvasContext.stroke()
}

function drawSkeleton (
    keypoints,
    minPoseConfidence,
    skeletonColor,
    skeletonLineWidth,
    canvasContext,
    scale=1
) {
    const adjacentKeyPoints = posenet.getAdjacentKeyPoints( keypoints, minPoseConfidence)
    drawSegment(
        toTuple(keypoints[0].position),
        toTuple(keypoints[1].position),
        skeletonColor,
        skeletonLineWidth,
        scale,
        canvasContext
    )
}


class Pushup extends React.Component {
    static defaultProps = {
        videoWidth: 900,
        videoHeight: 700,
        flipHorizontal: true,
        algorithm: 'single-pose',
        showVideo: true,
        showSkeleton: true,
        showPoints: true,
        minPoseConfidence: 0.1,
        minPartConfidence: 0.5,
        maxPoseDetections: 2,
        nmsRadius: 20,
        outputStride: 16,
        imageScaleFactor: 0.5,
        skeletonColor: '#ffadea',
        skeletonLineWidth: 6,
        loadingText: 'loading .... please wait ....'
    }

    async setupCamera() {
        if (!navigator.mediaDevices | !navigator.mediaDevices.getUserMedia) {
            throw new Error (
                'Browser API navigator.mediaDevices.getUserMedia not available'
            )
        }
        console.log( this.props )
        const {videoWidth, videoHeight} = this.props
        const video = this.video
        video.width = videoWidth
        video.height = videoHeight

        const stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                facingMode: 'user',
                width: videoWidth,
                height: videoHeight
            }
        })
        video.srcObject = stream

        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video)
            }
        })
    }

    async loadVideo() {
        const video = await this.setupCamera()
        video.play()

        return video
    }

    detectPose() {
        const {videoWidth, videoHeight} = this.props
        const canvas = this.canvas
        const canvasContext = canvas.getContext('2d')

        canvas.width = videoWidth
        canvas.height = videoHeight

        this.poseDetectionFrame(canvasContext)
    }

    poseDetectionFrame(canvasContext) {
        const {
            algorithm, imageScaleFactor, flipHorizontal, outputStride, minPoseConfidence, minPartConfidence, maxPoseDetections, nmsRadius, 
            videoWidth, videoHeight, showVideo, showPoints, showSkeleton, skeletonColor, skeletonLineWidth
        } = this.props

        const posenetModel = this.posenet
        const video = this.video

        const findPoseDerectionFrame = async () => {
            let poses = []

            switch (algorithm) {
                case 'multi-pose': {
                    poses = await posenetModel.estimateMultiplePoses(video,
                        imageScaleFactor, flipHorizontal, outputStride, maxPoseDetections, minPartConfidence, nmsRadius
                    )
                    break
                }
                case 'single-pose': {
                    const pose = await posenetModel.estimateSinglePose(video,
                        imageScaleFactor, flipHorizontal, outputStride
                    )
                    poses.push(pose)
                    break
                }
            }

            canvasContext.clearRect(0, 0, videoWidth, videoHeight)

            if (showVideo) {
                canvasContext.save()
                canvasContext.scale(-1, 1)
                canvasContext.translate(-videoWidth, 0)
                canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight)
                canvasContext.restore()
            }

            poses.forEach(({score, keypoints}) => {
                if (score > minPoseConfidence) {
                    if (showPoints) {
                        drawKeyPoints(
                            keypoints,
                            minPartConfidence,
                            skeletonColor,
                            canvasContext
                        )
                    }

                    if (showSkeleton) {
                        drawSkeleton(
                            keypoints,
                            minPartConfidence,
                            skeletonColor,
                            skeletonLineWidth,
                            canvasContext
                        )
                    }
                }
            })

            requestAnimationFrame(findPoseDerectionFrame)
        }
        findPoseDerectionFrame()
    }

    async componentDidMount() {
        try {
            await this.setupCamera()
        } catch (err) {
            console.log( err  )
            throw new Error( 
                'This browser does not support video capture, or this video does not have a camera'
            )
        }

        try {
            this.posenet = await posenet.load()
        } catch (error) {
            throw new Error (
                'posenet failed to load'
            )
        } finally {
            setTimeout(() => {
                this.setState({loading: false})
            }, 200)
        }
        console.log( 'doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' )
        this.detectPose()
    }

    constructor(props) {
        super(props, Pushup.defaultProps)
    }
    
    getCanvas = elem => {
        this.canvas = elem
    }

    getVideo = elem => {
        this.video = elem
    }

    render() {
        return (
            <>
                <video id="videoNoShow" playsInline ref={this.getVideo} />
                <canvas className="webcam" ref={this.getCanvas} />
            </>
        )
    }
}

export default Pushup;
