import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ mode }) => {
    return (
        <div className={`divider ${mode}`}></div>
    );
};

Divider.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
};

export default Divider;
