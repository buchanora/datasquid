'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    data: _propTypes2.default.string(),
    size: _propTypes2.default.oneOf([_propTypes2.default.string(), _propTypes2.default.number()]),
    fillShade: _propTypes2.default.string(),
    fillColor: _propTypes2.default.string()
};

function Icon(props) {
    return _react2.default.createElement(
        'svg',
        { width: props.size },
        _react2.default.createElement('path', { d: props.data })
    );
}

Icon.propTypes = propTypes;

exports.default = Icon;