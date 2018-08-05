'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = formReducer;

var _actionTypes = require('../constants/actionTypes');

var _formState = require('../helpers/formState');

var _formState2 = _interopRequireDefault(_formState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial Login Form state
var initialState = {
  activeField: null,
  fields: [],
  values: {},
  errors: {},
  errorMessage: null
};

function formReducer() {
  var _extends2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  // console.log('reducing');
  var values = void 0;
  switch (action.type) {
    case _actionTypes.INITIATE_FORM_STATE:
      if (action.payload.savedValues) {
        return _formState2.default.hydrate(action.payload.savedValues);
      }
      break;
    case _actionTypes.CLEAR_FORM_STATE:
      return _formState2.default.clear(state.values);
      break;
    case _actionTypes.SET_DATABASE_VALUES:
      return _extends({}, state, { values: action.values.val() });
      break;
    case _actionTypes.UPDATE_VALUE:
      values = _formState2.default.updateValue(state.values, action.payload);
      return _extends({}, state, {
        values: values
      });
      break;
    case _actionTypes.TOGGLE_MULTI_SELECT:
      values = _formState2.default.toggleMultiSelect(state.values, action.payload);
      return _extends({}, state, {
        values: values
      });
      break;
    case _actionTypes.NEXT_FIELD:
      return _extends({}, state, {
        activeField: action.currentIndex + 1
      });
      break;
    case _actionTypes.REVERT_ACTIVE_FIELD:
      return _extends({}, state, {
        activeField: null
      });
      break;
    case _actionTypes.FORM_ERROR:
      return _extends({}, state, {
        errorMessage: action.payload.errorMessage
      });
      break;
    case _actionTypes.FIELD_ERROR:
      if (!action.payload.errorText || action.payload.errorText === '') {
        var newErrors = _extends({}, state.errors);
        delete newErrors[action.payload.fieldName];
        return _extends({}, state, {
          errors: newErrors
        });
      }

      return _extends({}, state, {
        errors: _extends({}, state.errors, (_extends2 = {}, _extends2[action.payload.fieldName] = action.payload.errorText, _extends2))
        // form.alert(state, action.payload);
      });break;
    case 'NEXT_SECTION':
      return state; //TODO
      break;
    case 'FORM_SUBMIT':
      return _formState2.default.submit(state, action.payload);
      break;
  }
  return state;
}