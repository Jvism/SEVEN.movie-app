import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Paragraph.css';

const Paragraph = ({ size, label }) => {
    return(

        <p
        className={
            classNames("paragraph",{
                [`size-${size}`]: size
            })
        }>
            { label }
        </p>

)};

Paragraph.propTypes = {
    label: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm','md','xl'])
}

Paragraph.defaultProps = {
    size: 'md'
}

export default Paragraph;