import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from '../FieldWrap/';

export default function OptionTextField(props) {
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
    return React.createElement('option', { value: option, key: 'option_' + index });
  });

  return React.createElement(
    FieldWrap,
    { name: name,
      disabled: disabled,
      dirty: value ? true : false,
      error: error,
      uncollapse: uncollapse,
      label: label,
      expand: expand,
      id: id,
      className: '' + className },
    React.createElement('input', { name: name,
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
    React.createElement(
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  expand: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  type: PropTypes.string,
  uncollapse: PropTypes.bool,
  value: PropTypes.string
};