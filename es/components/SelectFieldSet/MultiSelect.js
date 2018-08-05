function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { SelectBox, SelectListItem, SelectOption } from './common';

var MultiSelectFieldSet = function (_Component) {
  _inherits(MultiSelectFieldSet, _Component);

  function MultiSelectFieldSet(props) {
    _classCallCheck(this, MultiSelectFieldSet);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._handleCheckStateChange = function (optionValue) {
      _this.setState(function (curState) {
        var _ref;

        return _ref = {}, _ref[optionValue] = !curState[optionValue], _ref;
      });
      _this.props.onChange(optionValue);
      // console.log(optionValue);
    };

    return _this;
  }

  MultiSelectFieldSet.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        _props$options = _props.options,
        options = _props$options === undefined ? [] : _props$options,
        _props$values = _props.values,
        values = _props$values === undefined ? {} : _props$values;

    var optionState = {};
    options.forEach(function (option) {
      optionState[option.name] = values[option.name] || false;
    });
    this.setState(optionState);
    // console.log(values);
  };

  MultiSelectFieldSet.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var options = {};
    // console.log(newProps)
    for (var value in newProps.values) {
      options[newProps.values[value]] = true;
    }
    this.setState(options);
  };

  MultiSelectFieldSet.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        _props2$name = _props2.name,
        name = _props2$name === undefined ? ' ' : _props2$name,
        _props2$disabled = _props2.disabled,
        disabled = _props2$disabled === undefined ? false : _props2$disabled,
        _props2$style = _props2.style,
        style = _props2$style === undefined ? 'check' : _props2$style,
        _props2$values = _props2.values,
        values = _props2$values === undefined ? {} : _props2$values,
        _props2$options = _props2.options,
        options = _props2$options === undefined ? [] : _props2$options,
        _props2$onChange = _props2.onChange,
        onChange = _props2$onChange === undefined ? function () {} : _props2$onChange,
        _props2$onSubmitEditi = _props2.onSubmitEditing,
        onSubmitEditing = _props2$onSubmitEditi === undefined ? function () {} : _props2$onSubmitEditi,
        _props2$label = _props2.label,
        label = _props2$label === undefined ? ' ' : _props2$label,
        _props2$required = _props2.required,
        required = _props2$required === undefined ? false : _props2$required;


    var optionList = options.map(function (option, index) {
      // console.log(this.state[option.value]+ ' for '+option.name)
      if (style === 'dropdown') {
        return React.createElement(SelectListItem, { key: 'check-' + index,
          checkerType: 'tick',
          value: option.value,
          disabled: disabled,
          checked: _this2.state[option.name],
          parent: name,
          content: option.value,
          onChange: _this2._handleCheckStateChange.bind(null, option.name) });
      }
      if (style === 'button') {
        return React.createElement(SelectBox, { key: 'check-' + index,
          checkerType: 'tick',
          value: option.value,
          iconClass: option.iconClass,
          disabled: disabled,
          checked: _this2.state[option.name],
          parent: name,
          name: option.name,
          onChange: _this2._handleCheckStateChange.bind(null, option.name) });
      }
      return React.createElement(SelectOption, { key: 'check-' + index,
        checkerType: 'tick',
        value: option.value,
        disabled: disabled,
        checked: _this2.state[option.name],
        parent: name,
        name: option.name,
        onChange: _this2._handleCheckStateChange.bind(null, option.name) });
    });
    return React.createElement(
      'fieldset',
      { className: 'select-group ' + (style === 'dropdown' ? 'select-list' : 'select-grid') },
      React.createElement(
        'legend',
        { className: 'select-label' },
        label
      ),
      optionList
    );
  };

  return MultiSelectFieldSet;
}(Component);

export default MultiSelectFieldSet;