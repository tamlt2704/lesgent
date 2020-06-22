import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/face-recognition.jpg'

function AppDemo01({  }) {
    return (
        <div className="row">
            <div className="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={logo} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

AppDemo01.defaultProps = {};

AppDemo01.propTypes = {
};

export default AppDemo01;
