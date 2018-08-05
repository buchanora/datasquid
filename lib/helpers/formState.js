'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var form = {

  hydrate: function hydrate(savedValues) {
    return {
      activeField: null,
      fields: [],
      values: savedValues || {},
      errors: {},
      errorMessage: null
    };
  },

  clear: function clear(values) {
    var newValues = {};
    for (var val in values) {
      if (values.hasOwnProperty(val)) {
        newValues[val] = '';
      }
    }

    return {
      values: newValues
    };
  },

  updateValue: function updateValue(values, payload) {
    var _extends2;

    var value = payload.value,
        name = payload.name;


    var newValues = _extends({}, values, (_extends2 = {}, _extends2[name] = value, _extends2));

    return newValues;
  },

  toggleMultiSelect: function toggleMultiSelect(values, payload) {
    var name = payload.name,
        option = payload.option;

    var newValues = _extends({}, values);
    if (newValues.hasOwnProperty([name])) {
      if (newValues[name][option]) {
        delete newValues[name][option];
      } else {
        newValues[name][option] = option;
      }
    } else {
      newValues[name] = {};
      newValues[name][option] = option;
    }
    return newValues;
  },

  next: function next(fieldState, payload) {
    var currentIndex = payload.currentIndex;

    var nextState = [].concat(fieldState);
    nextState[currentIndex].active = false;
    nextState[currentIndex + 1].active = true;
    return nextState;
  }
};

exports.default = form;