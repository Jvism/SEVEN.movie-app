import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({ type, size, label }) => {
    return(
    
    <button 
    className={
        classNames("button",
                {
                    [`type-${type}`]: type ,
                    [`size-${size}`]: size
                }
            )
        }
    >
        { label }
    </button>

)};

Button.propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["primary","secondary"]),
    size: PropTypes.oneOf(["sm","md","xl"])
};

Button.defaultProps = {
    type: 'primary',
    size: 'md'
};

export default Button;

