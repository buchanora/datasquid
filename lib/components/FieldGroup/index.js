'use strict';

exports.__esModule = true;
exports.default = FieldRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldRow(props) {

  return _react2.default.createElement(
    'div',
    { className: 'fieldGroup ' + (props.uncollapse ? 'fieldGroup--uncollapsed' : '') },
    props.children
  );
}

FieldRow.propTypes = {
  uncollapse: _propTypes.PropTypes.bool
};