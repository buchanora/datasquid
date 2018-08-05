var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { CLEAR_FORM_STATE, INITIATE_FORM_STATE, UPDATE_VALUE, TOGGLE_MULTI_SELECT, NEXT_FIELD, NEXT_SECTION, REVERT_ACTIVE_FIELD, SET_DATABASE_VALUES, FIELD_ERROR, FORM_ERROR } from '../constants/actionTypes';

import form from '../helpers/formState';

// Initial Login Form state
var initialState = {
  activeField: null,
  fields: [],
  values: {},
  errors: {},
  errorMessage: null
};

export default function formReducer() {
  var _extends2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  // console.log('reducing');
  var values = void 0;
  switch (action.type) {
    case INITIATE_FORM_STATE:
      if (action.payload.savedValues) {
        return form.hydrate(action.payload.savedValues);
      }
      break;
    case CLEAR_FORM_STATE:
      return form.clear(state.values);
      break;
    case SET_DATABASE_VALUES:
      return _extends({}, state, { values: action.values.val() });
      break;
    case UPDATE_VALUE:
      values = form.updateValue(state.values, action.payload);
      return _extends({}, state, {
        values: values
      });
      break;
    case TOGGLE_MULTI_SELECT:
      values = form.toggleMultiSelect(state.values, action.payload);
      return _extends({}, state, {
        values: values
      });
      break;
    case NEXT_FIELD:
      return _extends({}, state, {
        activeField: action.currentIndex + 1
      });
      break;
    case REVERT_ACTIVE_FIELD:
      return _extends({}, state, {
        activeField: null
      });
      break;
    case FORM_ERROR:
      return _extends({}, state, {
        errorMessage: action.payload.errorMessage
      });
      break;
    case FIELD_ERROR:
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
      return form.submit(state, action.payload);
      break;
  }
  return state;
}