import React from 'react';
import PropTypes from 'prop-types';
//import logo from '../../images/face-recognition.jpg'
import logo from '../../images/woman-face-forward-view.jpg'
import { FaEye, FaKey, FaFingerprint, FaWallet,
    FaWindows, FaLinux, FaDatabase, FaCloud, FaMicrochip, FaMapMarkedAlt,
    FaPython, FaJs,
    FaUserShield,
    FaMask
} from 'react-icons/fa'
import '../../App.css'

function AppDemo01({  }) {
    return (
        <>
        <div className="row pt-3">
            <div className="text-center border-0">
                <div className="card flex-row border-0">
                    <div>
                        <FaMask size={250} />
                    </div>
                    <div className="card-body px-2">
                        <h4 className="card-title"> Face Recognition </h4>
                        <p className="card-text">
                            A facial recognition system is a technology capable of identifying or verifying a person from a digital image or a video frame from a video source. There are multiple methods in which facial recognition systems work, but in general, they work by comparing selected facial features from given image with faces within a database. It is also described as a Biometric Artificial Intelligence based application that can uniquely identify a person by analyzing patterns based on the person's facial textures and shape.
                        </p>
                        <a href="#" className="btn btn-primary"> See More </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row pt-3">
            <div className="col pt-2 border-light d-flex">
                <div className="card border-0">
                    <FaEye size={50} color="#007aFF" className="card-img-top"/>
                    <div className="card-body text-center">
                        <h4 className="card-title"> Security </h4>
                        <p className="card-text"> Use AI computer visiion to augment survellance and foorensic review with suspect indentification</p>
                    </div>
                </div>
            </div>

            <div className="col pt-2">
                <div className="card border-0">
                    <FaKey size={50} color="#007aFF"  className="card-img-top"/>
                    <div className="card-body text-center">
                        <h4 className="card-title"> Access Control </h4>
                        <p className="card-text"> Use AI computer visiion to augment survellance and foorensic review with suspect indentification</p>
                    </div>
                </div>
            </div>
            
            <div className="col pt-2">
                <div className="card border-0">
                    <FaFingerprint size={50} color="#007aFF"  className="card-img-top"/>
                    <div className="card-body text-center">
                        <h4 className="card-title"> Identity </h4>
                        <p className="card-text"> Use AI computer visiion to augment survellance and foorensic review with suspect indentification</p>
                    </div>
                </div>
            </div>

            <div className="col pt-2">
                <div className="card border-0">
                    <FaWallet size={50} color="#007aFF"  className="card-img-top"/>
                    <div className="card-body text-center">
                        <h4 className="card-title"> Payment </h4>
                        <p className="card-text"> Use AI computer visiion to augment survellance and foorensic review with suspect indentification</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="row pt-5">
            <div className="col jumbotron text-center"> 
                <h1> Cross Platform Support </h1>
                <p>
                    Fast and easy to deploy in any virtual environment
                    Fast and easy to deploy in any virtual environment
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <div className="row text-center">
                    <div className="text-center">
                        Operating Systems
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <FaWindows size={20}/> <br />
                        Windows
                    </div>
                    <div className="col-6">
                        <FaLinux size={20}/> <br />
                        Linux
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row"> Deployment Options</div>
                <div className="row">
                    <div className="col"> 
                        <FaDatabase size={20} /> <br />
                        On Premise 
                    </div>
                    <div className="col"> 
                        <FaCloud size={20} /> <br />
                        Cloud/Hybrid
                    </div>
                </div>
                <div className="row">
                    <div className="col"> 
                        <FaMicrochip size={20} /> <br />
                        Edge Device
                    </div>
                    <div className="col"> 
                        <FaMapMarkedAlt size={20} /> <br />
                        Offline 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">Chipsets</div>
                <div className="row">
                    <div className="col">
                        <FaMicrochip size={20} color="blue" /> <br />
                        Intel
                    </div>
                    <div className="col">
                        <FaMicrochip size={20} /> <br />
                        Nvidia 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">Languages</div>
                <div className="row">
                    <div className="col"> 
                        <FaPython size={20} /> <br />
                        Python 
                    </div>
                    <div className="col"> 
                        <FaJs size={20} /> <br />
                        Javascript
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

AppDemo01.defaultProps = {};

AppDemo01.propTypes = {
};

export default AppDemo01;


// <div className="card" style={{width: "18rem"}}>
// <img className="card-img-top" src={logo} alt="Card image cap"/>
//     <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
// </div>
