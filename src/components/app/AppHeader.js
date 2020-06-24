import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/cybereye.jpg';
import {Link} from 'react-router-dom'

function AppHeader({  }) {
    return (
        <>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4" style={{backgroundColor: "#425b76"}}>
            <h5 className="my-0 mr-md-auto"> Cyber Eye </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/" className="p-2"> Home </Link>
                <Link to="products" className="p-2"> Product </Link>
                <Link to="about" className="p-2"> About </Link>
                <Link to="pushup" className="p-2"> Pushup </Link>
            </nav>
        </div>
        </>
    );
}

AppHeader.defaultProps = {};

AppHeader.propTypes = {
};

export default AppHeader;
