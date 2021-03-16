import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Heading.css'

const Heading = ({ size, type, label}) => {
    return(
        <span
        className={classNames("heading",{
            [`size-${size}`] : size,
            [`type-${type}`] : type
        })}>
            { label }
        </span>
)};

Heading.propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["primary","secondary"]),
    size: PropTypes.oneOf(["sm","md","xl"])
}

Heading.defaultProps = {
    type: 'primary',
    size: 'md'
}

export default Heading;