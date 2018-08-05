var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultiLineField from '../MultiLineField/';
import DateField from '../DateField/';
import DraftField from '../DraftField/';
import TextField from '../TextField/';
import TimeField from '../TimeField/';
import { SelectFieldSet, MultiSelectFieldSet } from '../Select/';
import OptionTextField from '../OptionTextField/';
import UploadField from '../UploadField/';

import EditableTextField from '../EditableTextField/';

/**
 * Act as a wrapper for form fields.
 * Passes form props from store to the function passed to render prop
 */

var FieldStack = function (_Component) {
  _inherits(FieldStack, _Component);

  function FieldStack(props) {
    _classCallCheck(this, FieldStack);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      values: {},
      disabled: {},
      errors: {},
      formError: ''
    };

    _this._handleUpdateValue = _this._handleUpdateValue.bind(_this);
    _this._handleToggleMultiSelect = _this._handleToggleMultiSelect.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    _this._handleFocus = _this._handleFocus.bind(_this);
    _this._handleKeyDown = _this._handleKeyDown.bind(_this);
    _this._handleKeyUp = _this._handleKeyUp.bind(_this);
    return _this;
  }

  FieldStack.prototype.render = function render() {
    var _props = this.props,
        formData = _props.formData,
        _props$fieldErrors = _props.fieldErrors,
        fieldErrors = _props$fieldErrors === undefined ? {} : _props$fieldErrors,
        formError = _props.formError,
        _props$values = _props.values,
        values = _props$values === undefined ? {} : _props$values,
        _props$disabledForm = _props.disabledForm,
        disabledForm = _props$disabledForm === undefined ? false : _props$disabledForm,
        _props$disabledFields = _props.disabledFields,
        disabledFields = _props$disabledFields === undefined ? {} : _props$disabledFields,
        _props$actions = _props.actions,
        actions = _props$actions === undefined ? {} : _props$actions,
        activeFieldIndex = _props.activeFieldIndex,
        render = _props.render;


    var actionMap = _extends({}, actions, {
      onKeyDown: this._handleKeyDown,
      onKeyUp: this._handleKeyUp,
      onChange: this._handleUpdateValue,
      onBlur: this._handleBlur,
      onFocus: this._handleFocus,
      onToggleMultiSelect: this._handleToggleMultiSelect
      // onNextInput: ()=>{},
    });

    return typeof render === 'function' ? render({ values: values, actions: actionMap, fieldErrors: fieldErrors, disabledFields: disabledFields, disabledForm: disabledForm, formError: formError }) : React.createElement(
      'div',
      { className: 'fieldWrap' },
      formData.fields.map(formatField.bind(this, values, actionMap, fieldErrors, disabledFields)),
      React.createElement(
        'div',
        { className: 'form-error-message ' + (formError ? 'show-element' : 'hide-element') },
        formError || this.state.formError
      )
    );

    function formatField(values, _actionMap, fieldErrors, disabledFields, field, index) {

      var isDisabled = disabledForm || disabledFields && disabledFields[field.name] || this.state.disabled[field.name];
      var hasError = fieldErrors && fieldErrors[field.name] || this.state.errors[field.name] || null;

      var onChange = _actionMap.onChange.bind(null, field.name);
      var onToggleMultiSelect = _actionMap.onToggleMultiSelect.bind(null, field.name);
      var onBlur = _actionMap.onBlur.bind(null, field.name);
      var onFocus = _actionMap.onFocus.bind(null, field.name);
      var onKeyDown = _actionMap.onKeyDown.bind(null, field.name);
      var onKeyUp = _actionMap.onKeyUp.bind(null, field.name);

      var name = field.name;
      var label = field.label;
      var type = field.type;
      var value = values ? values[field.name] : this.state.values[field.name];
      var options = field.options;
      var style = field.style;
      var secure = field.secure;

      var props = {
        key: 'input_' + index,
        active: activeFieldIndex,
        disabled: isDisabled,
        error: hasError,
        index: index,
        label: label,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        name: name,
        value: value,
        secure: secure || type === 'password'
      };

      switch (field.type) {
        case 'text':
        case 'password':
        case 'url':
        case 'email':
        case 'number':
        case 'tel':
          return React.createElement(TextField, _extends({ type: type }, props));
          break;
        case 'multilineText':
        case 'multiLineText':
        case 'multiline-text':
          return React.createElement(MultiLineField, props);
          break;
        case 'editableText':
        case 'editable-text':
          return React.createElement(EditableTextField, props);
          break;
        case 'optionText':
        case 'option-text':
          return React.createElement(OptionTextField, _extends({}, props, { options: options }));
          break;
        case 'date':
          return React.createElement(DateField, props);
          break;
        case 'time':
          return React.createElement(TimeField, props);
          break;
        case 'multiSelectFieldSet':
        case 'multi-select':
          return React.createElement(MultiSelectFieldSet, _extends({}, props, { style: style, onChange: onToggleMultiSelect, options: options }));
          break;
        case 'selectFieldSet':
        case 'select':
          return React.createElement(SelectFieldSet, _extends({ options: options }, props));
          break;
        case 'upload':
          return React.createElement(UploadField, props);
          break;
        case 'draft':
          return React.createElement(DraftField, props);
          break;
        default:
          return React.createElement(TextField, _extends({ type: type }, props));
      }
    }
  };

  FieldStack.prototype._handleUpdateValue = function _handleUpdateValue(name, optionValue, event) {

    var value = void 0,
        mockEvent = void 0;
    if (event) {
      value = optionValue;
      mockEvent = { target: { value: value } };
    } else {
      mockEvent = optionValue;
      value = mockEvent.target.value;
    }

    this.props.actions.onChange && this.props.actions.onChange(name, mockEvent);
  };

  FieldStack.prototype._handleToggleMultiSelect = function _handleToggleMultiSelect(name, optionValue, event) {

    var setNewValues = function setNewValues(option, values) {

      if (values.hasOwnProperty(name)) {
        var newValues = _extends({}, values);
        if (newValues[name][option]) {
          delete newValues[name][option];
        } else {
          newValues[name][option] = option;
        }
        return newValues;
      } else {
        var _name, _extends2;

        return _extends({}, values, (_extends2 = {}, _extends2[name] = (_name = {}, _name[option] = option, _name), _extends2));
      }
    };

    this.props.actions.onToggleMultiSelect ? this.props.actions.onToggleMultiSelect(name, optionValue) : this.setState({
      values: setNewValues(optionValue, this.state.values)
    });
  };

  FieldStack.prototype._handleKeyDown = function _handleKeyDown(name, event) {
    this.props.actions.onKeyDown && this.props.actions.onKeyDown(name, event);
  };

  FieldStack.prototype._handleKeyUp = function _handleKeyUp(name, event) {
    this.props.actions.onKeyUp && this.props.actions.onKeyUp(name, event);
  };

  FieldStack.prototype._handleFocus = function _handleFocus(name, event) {
    this.props.actions.onFocus && this.props.actions.onFocus(name, event);
  };

  FieldStack.prototype._handleBlur = function _handleBlur(name, event) {
    this.props.actions.onBlur && this.props.actions.onBlur(name, event);
  };

  return FieldStack;
}(Component);

FieldStack.propTypes = {
  activeFieldIndex: PropTypes.number, // The index of the field currently in focus. Only necessary when formdata props is present
  actions: PropTypes.object.isRequired, // Customize event handler functions
  disabledForm: PropTypes.bool, // Disables all form fields
  disabledFields: PropTypes.object, // Disables listed fields
  formData: PropTypes.object, // Configures fieldstack to auto render form
  fieldErrors: PropTypes.object, // Adds error messages to listed fields
  formError: PropTypes.string, // Adds error message to form
  render: PropTypes.func, // Renders the returned component
  values: PropTypes.object // Updates form values
};

FieldStack.defaultProps = {
  formData: {
    formTitle: 'Login Form',
    fields: [{
      name: 'email',
      label: 'Email',
      type: 'text',
      secure: false,
      keyboard: 'email-address'
    }, {
      name: 'password',
      label: 'Password',
      type: 'password',
      secure: true,
      keyboard: 'default'
    }]
  }
};

export default FieldStack;