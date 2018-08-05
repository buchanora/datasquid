function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { SelectBox, SelectListItem, SelectOption } from './common';

var SelectFieldSet = function (_Component) {
  _inherits(SelectFieldSet, _Component);

  function SelectFieldSet(props) {
    _classCallCheck(this, SelectFieldSet);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      dropdownVisible: false
    };

    _this._handleDropdownTriggerClick = _this._handleDropdownTriggerClick.bind(_this);
    _this._handleDropdownOptionClick = _this._handleDropdownOptionClick.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    return _this;
  }

  SelectFieldSet.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        _props$name = _props.name,
        name = _props$name === undefined ? '' : _props$name,
        _props$disabled = _props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled,
        _props$selection = _props.selection,
        selection = _props$selection === undefined ? {} : _props$selection,
        _props$type = _props.type,
        type = _props$type === undefined ? 'select-box' : _props$type,
        _props$value = _props.value,
        value = _props$value === undefined ? '' : _props$value,
        _props$style = _props.style,
        style = _props$style === undefined ? 'box' : _props$style,
        _props$options = _props.options,
        options = _props$options === undefined ? [] : _props$options,
        _props$onChange = _props.onChange,
        onChange = _props$onChange === undefined ? function () {} : _props$onChange,
        _props$onSubmitEditin = _props.onSubmitEditing,
        onSubmitEditing = _props$onSubmitEditin === undefined ? function () {} : _props$onSubmitEditin,
        _props$label = _props.label,
        label = _props$label === undefined ? '' : _props$label,
        _props$required = _props.required,
        required = _props$required === undefined ? false : _props$required;
    // console.log(selection);


    var optionList = options.map(function (option, index) {
      // console.log(option.value);
      if (style === 'dropdown') {
        return React.createElement(SelectListItem, { key: 'check-' + index,
          checkerType: 'sphere',
          value: option.value,
          disabled: disabled,
          checked: selection[option.value] ? true : false,
          parent: name,
          content: option.name,
          onChange: _this2._handleDropdownOptionClick.bind(null, option) });
      }
      if (style === 'button') {
        return React.createElement(SelectBox, { key: 'check-' + index,
          checkerType: 'sphere',
          value: option.value,
          iconClass: option.iconClass,
          disabled: disabled,
          checked: selection.value === option.value ? true : false,
          parent: name,
          name: option.name,
          onChange: onChange.bind(null, option) });
      }
      return React.createElement(SelectOption, { key: 'check-' + index,
        checkerType: 'sphere',
        value: option.value,
        disabled: disabled,
        checked: selection[option.value] ? true : false,
        parent: name,
        name: option.name,
        onChange: onChange.bind(null, option) });
    });

    function renderField(style, dropdownVisible, handleDropdownTriggerClick) {
      if (style === 'dropdown') {
        return React.createElement(
          'div',
          null,
          !dropdownVisible ? React.createElement(
            'div',
            { onClick: handleDropdownTriggerClick },
            React.createElement(
              'span',
              { className: 'select-field' },
              value || 'Not Selected'
            ),
            React.createElement('span', { className: 'select-caret icofont icofont-rounded-down' })
          ) : optionList
        );
      }

      return optionList;
    }

    return React.createElement(
      'fieldset',
      { className: 'select-group ' + (style === 'dropdown' ? 'select-list' : 'select-grid') },
      React.createElement(
        'legend',
        { className: 'select-label' },
        label
      ),
      renderField(style, this.state.dropdownVisible, this._handleDropdownTriggerClick)
    );
  };

  SelectFieldSet.prototype._handleDropdownTriggerClick = function _handleDropdownTriggerClick() {
    this.toggleDropdown();
  };

  SelectFieldSet.prototype._handleOptionClick = function _handleOptionClick(value, event) {

    this.props.onChange(value);
    this.props.style === 'dropdown' && this.toggleDropdown();
  };

  SelectFieldSet.prototype._handleDropdownOptionClick = function _handleDropdownOptionClick(value, event) {

    this.props.onChange(value);
    this.toggleDropdown();
  };

  SelectFieldSet.prototype.toggleDropdown = function toggleDropdown() {
    this.setState(function (curState) {
      return {
        dropdownVisible: !curState.dropdownVisible
      };
    });
  };

  return SelectFieldSet;
}(Component);

export default SelectFieldSet;