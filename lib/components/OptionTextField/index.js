'use strict';

exports.__esModule = true;
exports.default = OptionTextField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldWrap = require('../FieldWrap/');

var _FieldWrap2 = _interopRequireDefault(_FieldWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OptionTextField(props) {
  var name = props.name,
      disabled = props.disabled,
      type = props.type,
      value = props.value,
      error = props.error,
      id = props.id,
      className = props.className,
      onChange = props.onChange,
      onSubmitEditing = props.onSubmitEditing,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      options = props.options,
      label = props.label,
      required = props.required,
      uncollapse = props.uncollapse,
      expand = props.expand;


  var dataListOptions = options.map(function (option, index) {
    return _react2.default.createElement('option', { value: option, key: 'option_' + index });
  });

  return _react2.default.createElement(
    _FieldWrap2.default,
    { name: name,
      disabled: disabled,
      dirty: value ? true : false,
      error: error,
      uncollapse: uncollapse,
      label: label,
      expand: expand,
      id: id,
      className: '' + className },
    _react2.default.createElement('input', { name: name,
      disabled: disabled,
      type: type,
      className: 'field-input text-field',
      list: name + '_options',
      onChange: onChange,
      onBlur: onBlur,
      onFocus: onFocus,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onSubmit: onSubmitEditing,
      value: value,
      required: required }),
    _react2.default.createElement(
      'dataList',
      { id: name + '_options' },
      dataListOptions
    )
  );
}

OptionTextField.defaultProps = {
  className: '',
  value: '',
  onChange: function onChange() {},
  onSubmitEditing: function onSubmitEditing() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
OptionTextField.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  expand: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onSubmitEditing: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.string),
  required: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  uncollapse: _propTypes2.default.bool,
  value: _propTypes2.default.string
};