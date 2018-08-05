var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { initiateFormState as _initiateFormState, clearFormState as _clearFormState, updateValue as _updateValue, toggleMultiSelect as _toggleMultiSelect, fieldError as _fieldError, formError as _formError } from '../actionCreators/';

export default function formConnector(mapStateToProps, mapDispatchToProps) {

  return function (WrappedComponent) {
    var WFC = function (_Component) {
      _inherits(WFC, _Component);

      function WFC(props) {
        _classCallCheck(this, WFC);

        return _possibleConstructorReturn(this, _Component.call(this, props));
      }

      WFC.prototype.componentWillMount = function componentWillMount() {
        this.props.initiateFormState(this.props.formData, this.props.formName, this.props.savedValues);
      };

      WFC.prototype.componentWillUnmount = function componentWillUnmount() {
        this.props.clearFormState();
      };

      WFC.prototype.render = function render() {
        var _props = this.props,
            updateValue = _props.updateValue,
            toggleMultiSelect = _props.toggleMultiSelect;
        // action triggers update state and can be overidden by the user

        function generateFormActions() {
          var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // actions arg is an object of user defined action functions that overides default actions
          return {
            onChange: actions.onChange || function (fieldName, event) {
              updateValue(fieldName, event.target.value);
            }, // update state for single value fields

            onToggleMultiSelect: actions.onToggleMultiSelect || function (fieldName, value) {
              toggleMultiSelect(fieldName, value);
            }, // update state for multiselection field
            onKeyDown: actions.onKeyDown,
            onKeyUp: actions.onKeyUp,
            onFocus: actions.onFocus, // (fieldName, curValue)=>{},// Do something when a field comes into focus
            onBlur: actions.onBlur, // (fieldName, curValue)=>{}, // Do something when a field blurs
            onInterval: actions.onInterval, // (fieldname, curValue)=>{}, // Do something on time interval
            onNextInput: actions.onNextInput, // (fieldName, curValue)=>{}, //Do something when "enter" key is hit
            onRevertInputFocus: actions.onRevertInputFocus // (fieldName, curValue)=>{}, // Do something when the previous field is back in focus
          };
        }

        return React.createElement(WrappedComponent, _extends({ generateFormActions: generateFormActions }, this.props));
      };

      return WFC;
    }(Component);

    function mergeState(state, ownProps) {
      var originalState = mapStateToProps(state, ownProps);

      return _extends({}, originalState, {
        formValues: state.form.values,
        fieldErrors: state.form.errors,
        errorMessage: state.form.errorMessage,
        savedValues: ownProps.savedValues
      });
    }

    function mergeDispatch(dispatch) {
      var originalDispatch = mapDispatchToProps(dispatch);

      return _extends({}, originalDispatch, {
        initiateFormState: function initiateFormState(savedValues) {
          return dispatch(_initiateFormState(savedValues));
        },
        clearFormState: function clearFormState() {
          return dispatch(_clearFormState());
        },
        updateValue: function updateValue(name, value) {
          return dispatch(_updateValue(name, value));
        },
        fieldError: function fieldError(field, error) {
          return dispatch(_fieldError(field, error));
        },
        formError: function formError(errorMessage) {
          return dispatch(_formError(errorMessage));
        },
        toggleMultiSelect: function toggleMultiSelect(name, option) {
          return dispatch(_toggleMultiSelect(name, option));
        }
      });
    }

    WFC.propTypes = {
      formValues: PropTypes.object,
      fieldErrors: PropTypes.object,
      errorMessage: PropTypes.string,
      savedValues: PropTypes.object,
      initiateFormState: PropTypes.func,
      clearFormState: PropTypes.func,
      updateValue: PropTypes.func,
      fieldError: PropTypes.func,
      formError: PropTypes.func,
      toggleMultiSelect: PropTypes.func
    };

    return connect(mergeState, mergeDispatch)(WFC);
  };
}