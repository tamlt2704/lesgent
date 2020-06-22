import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function AppCanvas({  }) {
    const canvasRef = useRef()
    const [canvasSize, setCanvasSize]  =  useState({width: 600, height: 400})
    const createArray = length => [...Array(length)]
    const randomStars = createArray(50).map((c, i) => {
            let x = Math.random() * canvasSize.width
            let y = Math.random() * canvasSize.height
            let radius = Math.random() * 3
            let originRadius = radius
            return ({ x, y, radius , originRadius })
        })
    const [stars, setStars] =  useState(randomStars)
    const [rAF, setRAF] = useState(null)

    const speed = 150
    let lastMove = 0
    const drawStars = (t) => {
        if ((t - lastMove) > speed) {
            const canvasObj = canvasRef.current
            const ctx = canvasObj.getContext('2d')
            const {width: w, height: h} = canvasObj

            ctx.strokeStyle = "balck"
            ctx.fillStyle= "#425b76"
            ctx.fillRect(0, 0, w, h)

            ctx.fillStyle= "white"
            for (let star of stars) {
                star.x += Math.random() * (Math.floor(Math.random() * 2) ? 1 : -1)
                star.x %= canvasSize.width
                star.y += Math.random() 
                star.y %= canvasSize.height
                let {x, y, radius} = star
                ctx.beginPath()
                ctx.arc(x, y, radius, 0, Math.PI * 2, false)
                ctx.fill()
            }

            lastMove = t
        }
        setRAF(requestAnimationFrame(drawStars))
    }

    const mouseOverCanvas = (e) => {
        let mouseX = e.clientX
        let mouseY = e.clientY
        for (let star of stars) {
            let {x, y} = star
            const xDist = mouseX - x
            const yDist = mouseY - y
            const distanceToMose = Math.sqrt(xDist * xDist + yDist * yDist)
            star.radius = (distanceToMose < 100) ? 3 : star.originRadius
        }
    }


    useEffect(() => {
        console.log( 'use effect' )
        setRAF(requestAnimationFrame(drawStars))
        return () => {
            console.log( 'cancel raf' )
            cancelAnimationFrame(rAF)
        }
    }, [stars])

    return (
        <div className="row">
            <canvas 
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                onMouseMove={mouseOverCanvas}
            />
        </div>
    );
}

AppCanvas.defaultProps = {};

AppCanvas.propTypes = {
};

export default AppCanvas;
