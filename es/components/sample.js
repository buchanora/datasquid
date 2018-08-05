var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { FieldStack, TextField, MultiLineField, FieldRow } from 'fieldstack';

var SampleForm = function (_Component) {
  _inherits(SampleForm, _Component);

  function SampleForm() {
    _classCallCheck(this, SampleForm);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SampleForm.prototype.render = function render() {
    var actions = {
      onChange: this.handleChange.bind(this)
    };
    return React.createElement(FieldStack, { values: this.state.values,
      actions: actions,
      render: function render(_ref) {
        var values = _ref.values,
            actions = _ref.actions,
            fieldErrors = _ref.fieldErrors,
            disabledFields = _ref.disabledFields,
            disabledForm = _ref.disabledForm;

        return React.createElement(
          'div',
          null,
          React.createElement(
            FieldRow,
            null,
            React.createElement(TextField, { label: 'First Name',
              value: values.firstName,
              onChange: actions.onChange.bind(null, 'firstName') }),
            React.createElement(TextField, { label: 'Last Name',
              value: values.lastName,
              onChange: actions.onChange.bind(null, 'lastName') }),
            React.createElement(TextField, { label: 'Email',
              value: values.email,
              onChange: actions.onChange.bind(null, 'email') }),
            React.createElement(TextField, { label: 'Phone Number',
              value: values.phone,
              onChange: actions.onChange.bind(null, 'phone') })
          ),
          React.createElement(MultiLineField, { label: 'Bio',
            value: values.aboutMe,
            onChange: actions.onChange.bind(null, 'aboutMe') })
        );
      } });
  };

  SampleForm.prototype.handleChange = function handleChange(fieldName, event) {
    this.setState(function (currentState) {
      var _extends2;

      return {
        values: _extends((_extends2 = {}, _extends2[fieldName] = event.target.value, _extends2), currentState.values)
      };
    });
  };

  return SampleForm;
}(Component);