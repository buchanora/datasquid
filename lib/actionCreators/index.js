'use strict';

exports.__esModule = true;
exports.initiateFormState = initiateFormState;
exports.clearFormState = clearFormState;
exports.formSubmit = formSubmit;
exports.formError = formError;
exports.setDatabaseValues = setDatabaseValues;
exports.updateValue = updateValue;
exports.toggleMultiSelect = toggleMultiSelect;
exports.nextField = nextField;
exports.revertActiveField = revertActiveField;
exports.nextSection = nextSection;
exports.fieldError = fieldError;

var _actionTypes = require('../constants/actionTypes');

function initiateFormState(savedValues) {
  return {
    type: _actionTypes.INITIATE_FORM_STATE,
    payload: {
      savedValues: savedValues
    }
  };
}

function clearFormState() {
  return {
    type: _actionTypes.CLEAR_FORM_STATE
  };
}

function formSubmit(title, payload) {
  return {
    type: _actionTypes.FORM_SUBMIT,
    title: title,
    payload: payload
  };
}

function formError(errorMessage) {
  return {
    type: _actionTypes.FORM_ERROR,
    payload: {
      errorMessage: errorMessage
    }
  };
}

function setDatabaseValues(values) {
  return {
    type: _actionTypes.SET_DATABASE_VALUES,
    values: values
  };
}

function updateValue(name, value) {
  return {
    type: _actionTypes.UPDATE_VALUE,
    payload: {
      name: name,
      value: value
    }
  };
}

function toggleMultiSelect(name, option) {
  return {
    type: _actionTypes.TOGGLE_MULTI_SELECT,
    payload: {
      name: name,
      option: option
    }
  };
}

function nextField(currentIndex) {
  return {
    type: _actionTypes.NEXT_FIELD,
    currentIndex: currentIndex

  };
}

function revertActiveField() {
  return {
    type: _actionTypes.REVERT_ACTIVE_FIELD
  };
}

function nextSection() {
  return {
    type: _actionTypes.NEXT_SECTION
  };
}

function fieldError(fieldName, errorText) {
  return {
    type: _actionTypes.FIELD_ERROR,
    payload: {
      fieldName: fieldName,
      errorText: errorText
    }
  };
}