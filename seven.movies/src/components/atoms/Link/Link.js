import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Link.css';

const Link = ({ url, size, label}) => {
    return(
        <a
            className={
                classNames("link",
                    {
                        [`size-${size}`]: size
                    }
                )
            }
            href={url}
        >
            { label }
        </a>
)};

Link.propTypes = {
    label: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["sm","md","xl"])
};

Link.defaultProps = {
    url: '#',
    size: 'md'
};

export default Link;