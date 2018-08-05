var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Select from './Select';

var MultiSelectFieldSet = function (_Component) {
  _inherits(MultiSelectFieldSet, _Component);

  function MultiSelectFieldSet(props) {
    _classCallCheck(this, MultiSelectFieldSet);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._handleCheckStateChange = function (option) {
      var selections = _this.state;
      if (selections[option.value]) {
        delete selections[option.value];
      } else {
        selections[option.value] = option;
      }
      _this.setState(function () {
        return selections;
      });
      _this.props.onChange(selections);
    };

    _this.state = {};
    _this._handleCheckStateChange = _this._handleCheckStateChange.bind(_this);

    return _this;
  }

  MultiSelectFieldSet.prototype.render = function render() {
    return React.createElement(Select, _extends({}, this.props, { multiple: true, onChange: this._handleCheckStateChange, selection: this.props.selection || this.state }));
  };

  return MultiSelectFieldSet;
}(Component);

export default MultiSelectFieldSet;