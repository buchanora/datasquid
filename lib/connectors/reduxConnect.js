'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = formConnector;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actionCreators = require('../actionCreators/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formConnector(mapStateToProps, mapDispatchToProps) {

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

        return _react2.default.createElement(WrappedComponent, _extends({ generateFormActions: generateFormActions }, this.props));
      };

      return WFC;
    }(_react.Component);

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
          return dispatch((0, _actionCreators.initiateFormState)(savedValues));
        },
        clearFormState: function clearFormState() {
          return dispatch((0, _actionCreators.clearFormState)());
        },
        updateValue: function updateValue(name, value) {
          return dispatch((0, _actionCreators.updateValue)(name, value));
        },
        fieldError: function fieldError(field, error) {
          return dispatch((0, _actionCreators.fieldError)(field, error));
        },
        formError: function formError(errorMessage) {
          return dispatch((0, _actionCreators.formError)(errorMessage));
        },
        toggleMultiSelect: function toggleMultiSelect(name, option) {
          return dispatch((0, _actionCreators.toggleMultiSelect)(name, option));
        }
      });
    }

    WFC.propTypes = {
      formValues: _propTypes2.default.object,
      fieldErrors: _propTypes2.default.object,
      errorMessage: _propTypes2.default.string,
      savedValues: _propTypes2.default.object,
      initiateFormState: _propTypes2.default.func,
      clearFormState: _propTypes2.default.func,
      updateValue: _propTypes2.default.func,
      fieldError: _propTypes2.default.func,
      formError: _propTypes2.default.func,
      toggleMultiSelect: _propTypes2.default.func
    };

    return (0, _reactRedux.connect)(mergeState, mergeDispatch)(WFC);
  };
}