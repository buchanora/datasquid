'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TimeField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../TextField/');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimeField(props) {

  var timeVal = props.val || ' ';
  return _react2.default.createElement(_TextField2.default, _extends({ type: 'time', placeholder: '_ _ : _ _  AM', value: timeVal }, props));
}