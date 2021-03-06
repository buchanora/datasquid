var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import TextField from '../TextField/';

export default function TimeField(props) {

  var timeVal = props.val || ' ';
  return React.createElement(TextField, _extends({ type: 'time', placeholder: '_ _ : _ _  AM', value: timeVal }, props));
}