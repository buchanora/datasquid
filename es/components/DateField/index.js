var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import TextField from '../TextField/';

export default function DateField(props) {

  var dateVal = props.value ? props.value.split('T')[0] : ' ';

  return React.createElement(TextField, _extends({}, props, { type: 'date', value: dateVal, placeholder: 'dd/mm/yyyy' }));
}