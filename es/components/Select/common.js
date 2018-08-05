import React from 'react';

export function SelectOption(props) {
  var disabled = props.disabled,
      checkerType = props.checkerType,
      label = props.label,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled && 'select-option-disabled';
  var checkedStateClass = checked && 'select-option-checked';
  return React.createElement(
    'span',
    { className: 'select-option ' + checkedStateClass + ' ' + disabledStateClass,
      onClick: disabled || onChange },
    React.createElement(Checker, { style: checkerType || 'sphere', checked: checked, disabled: disabled }),
    label
  );
}

export function SelectButton(props) {
  var disabled = props.disabled,
      label = props.label,
      iconClass = props.iconClass,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled ? 'select-button-disabled' : '';
  var checkedStateClass = checked ? 'select-button-checked' : '';

  return React.createElement(
    'span',
    { className: 'select-button ' + checkedStateClass + ' ' + disabledStateClass + ' ',
      onClick: disabled || onChange },
    React.createElement('i', { className: iconClass }),
    label
  );
}
export function CheckListItem(props) {
  var disabled = props.disabled,
      checkerType = props.checkerType,
      label = props.label,
      checked = props.checked,
      onChange = props.onChange;


  var disabledStateClass = disabled && 'select-list-item-disabled';
  var checkedStateClass = checked && 'select-select-list-checked';

  return React.createElement(
    'div',
    { className: 'select-list-item ' + checkedStateClass + ' ' + disabledStateClass,
      onClick: disabled || onChange },
    React.createElement(
      'span',
      { className: 'select-list-item-content' },
      label
    ),
    React.createElement(
      'span',
      { className: 'select-list-item-checker' },
      React.createElement(Checker, { style: checkerType || 'tick', checked: checked, disabled: disabled })
    )
  );
}

export function Checker(props) {
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

  return React.createElement('span', { className: 'checker ' + checkedStateClass + ' ' + disabledStateClass + ' ' + setStyleClass(style, checked),
    onClick: _handleCheckedStateChange.bind(null, checked) });
  function _handleCheckedStateChange(checkedState) {
    if (onChange) {
      onChange(!checkedState);
    }
  }
}