import React from 'react';

import PropTypes from 'prop-types';

var propTypes = {
    data: PropTypes.string(),
    size: PropTypes.oneOf([PropTypes.string(), PropTypes.number()]),
    fillShade: PropTypes.string(),
    fillColor: PropTypes.string()
};

function Icon(props) {
    return React.createElement(
        'svg',
        { width: props.size },
        React.createElement('path', { d: props.data })
    );
}

Icon.propTypes = propTypes;

export default Icon;