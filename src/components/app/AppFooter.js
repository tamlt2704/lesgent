import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/cybereye.jpg';
import '../../App.css'

function AppFooter({  }) {
    return (
        <>
        <footer className="pt-4 my-md-5 pt-md-5 border-light">
            <div className="row">
                <div className="col-12 col-md">
                    <img src={logo} alt="" style={{width: 40, height: 40, borderRadius: 50}}/> &nbsp;
                    <small className="d-block mb-3 text-muted">
                        &copy; 2020
                    </small>
                </div>

                <div className="col-6 col-md">
                    <h5> Products </h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#"> Face Recorgnisation </a></li>
                    </ul>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#"> Data Story Telling</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5> About Us</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#"> Contact </a></li>
                    </ul>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#"> Demo </a></li>
                    </ul>
                </div>
            </div>
        </footer>
		</>
    );
}

AppFooter.defaultProps = {};

AppFooter.propTypes = {
};

export default AppFooter;
