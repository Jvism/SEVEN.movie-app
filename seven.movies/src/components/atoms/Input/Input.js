import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({ size, type, label}) => {
    return(
        <div className={classNames("form-group",{
            [`size-${size}`]: size
        })}>

            <input 
                type={type} 
                id={label}
                name={label}
                placeholder={label}
                className="input"
            ></input>

            <label className="label" for={label}>{ label }</label>

        </div>
)};

Input.propTypes = {
    label: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm','md','xl']),
    type: PropTypes.oneOf(['text','password'])
}

Input.defaultProps = {
    size: 'md',
    type: 'text'
}

export default Input;