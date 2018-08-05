'use strict';

exports.__esModule = true;
exports.SelectOption = SelectOption;
exports.SelectButton = SelectButton;
exports.CheckListItem = CheckListItem;
exports.Checker = Checker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SelectOption(props) {
  var disabled = props.disabled,
      checkerType = props.checkerType,
      label = props.label,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled && 'select-option-disabled';
  var checkedStateClass = checked && 'select-option-checked';
  return _react2.default.createElement(
    'span',
    { className: 'select-option ' + checkedStateClass + ' ' + disabledStateClass,
      onClick: disabled || onChange },
    _react2.default.createElement(Checker, { style: checkerType || 'sphere', checked: checked, disabled: disabled }),
    label
  );
}

function SelectButton(props) {
  var disabled = props.disabled,
      label = props.label,
      iconClass = props.iconClass,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled ? 'select-button-disabled' : '';
  var checkedStateClass = checked ? 'select-button-checked' : '';

  return _react2.default.createElement(
    'span',
    { className: 'select-button ' + checkedStateClass + ' ' + disabledStateClass + ' ',
      onClick: disabled || onChange },
    _react2.default.createElement('i', { className: iconClass }),
    label
  );
}
function CheckListItem(props) {
  var disabled = props.disabled,
      checkerType = props.checkerType,
      label = props.label,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled && 'select-list-item-disabled';
  var checkedStateClass = checked && 'select-select-list-checked';

  return _react2.default.createElement(
    'div',
    { className: 'select-list-item ' + checkedStateClass + ' ' + disabledStateClass,
      onClick: disabled || onChange },
    _react2.default.createElement(
      'span',
      { className: 'select-list-item-content' },
      label
    ),
    _react2.default.createElement(
      'span',
      { className: 'select-list-item-checker' },
      _react2.default.createElement(Checker, { style: checkerType || 'tick', checked: checked, disabled: disabled })
    )
  );
}

function Checker(props) {
  var disabled = props.disabled,
      onChange = props.onChange,
      _props$checked = props.checked,
      checked = _props$checked === undefined ? false : _props$checked,
      _props$style = props.style,
      style = _props$style === undefined ? 'sphere' : _props$style;


  var disabledStateClass = disabled ? 'checker-disabled' : '';
  var checkedStateClass = checked ? 'checker-checked' : '';

  function setStyleClass(style, checked) {
    if (style === 'tick') {
      return checked ? 'checker-box icofont icofont-check' : 'checker-box icofont icofont-close';
    }
    if (style === 'sphere') {
      return checked ? ' checker-sphere checker-sphere-checked' : 'checker-sphere checker-sphere-checked';
    }
  }

  return _react2.default.createElement('span', { className: 'checker ' + checkedStateClass + ' ' + disabledStateClass + ' ' + setStyleClass(style, checked),
    onClick: _handleCheckedStateChange.bind(null, checked) });
  function _handleCheckedStateChange(checkedState) {
    if (onChange) {
      onChange(!checkedState);
    }
  }
}