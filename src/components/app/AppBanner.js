import React from 'react';
import PropTypes from 'prop-types';

function AppBanner({  }) {
    return (
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "#425b76"}}>
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
        </div>
    );
}

AppBanner.defaultProps = {};

AppBanner.propTypes = {
};

export default AppBanner;
