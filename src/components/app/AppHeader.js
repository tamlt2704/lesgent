import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/cybereye.jpg';
import {Link} from 'react-router-dom'

function AppHeader({  }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark" style={{backgroundColor: "#425b76"}}>
                <img src={logo} alt="" style={{width: 40, height: 40, borderRadius: 50}}/> &nbsp;
                <a className="navbar-brand" href="/">cyber eye</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

AppHeader.defaultProps = {};

AppHeader.propTypes = {
};

export default AppHeader;
