import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/cybereye.jpg';
import '../../App.css'

function AppFooter({  }) {
    return (
        <div className="row footer" style={{backgroundColor: "#f4f4f4"}}>
            <div className="col"> 
                <h2>
                    <img src={logo} alt="" style={{width: 40, height: 40, borderRadius: 50}}/> &nbsp;
                    Cyber Eye
                </h2>
            </div>
            <div className="col"> 
                <h3>
                    Products 
                </h3>
                <p>
                    Face Recognition
                </p>
            </div>
            <div className="col"> 
                <h3>
                    About Us
                </h3>
                <p>
                    News
                </p>
                <p>
                    Contact
                </p>
            </div>
        </div>
    );
}

AppFooter.defaultProps = {};

AppFooter.propTypes = {
};

export default AppFooter;
