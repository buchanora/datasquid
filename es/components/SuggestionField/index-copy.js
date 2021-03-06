function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';

var SuggestionField = function (_Component) {
  _inherits(SuggestionField, _Component);

  function SuggestionField(props) {
    _classCallCheck(this, SuggestionField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      dropdownVisible: false,
      inputValue: '',
      selectIndex: 0
    };

    _this._handleFieldFocus = _this._handleFieldFocus.bind(_this);
    _this._handleFieldBlur = _this._handleFieldBlur.bind(_this);
    _this._handleChangeValue = _this._handleChangeValue.bind(_this);
    _this._handleDropdownOptionClick = _this._handleDropdownOptionClick.bind(_this);
    _this._changeDropdownVisibility = _this._changeDropdownVisibility.bind(_this);
    _this._selectOption = _this._selectOption.bind(_this);

    return _this;
  }

  SuggestionField.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        _props$suggestions = _props.suggestions,
        suggestions = _props$suggestions === undefined ? [] : _props$suggestions,
        _props$value = _props.value,
        value = _props$value === undefined ? {} : _props$value,
        onSelect = _props.onSelect,
        placeholder = _props.placeholder,
        onChange = _props.onChange,
        getSuggestionString = _props.getSuggestionString,
        className = _props.className;


    var suggestionsMap = suggestions.length > 0 && suggestions.map(function (item, index) {
      return React.createElement(
        'span',
        { className: 'suggestionField-option',
          key: 'selectOption_' + index,
          onClick: _this2._handleDropdownOptionClick.bind(null, index, item) },
        getSuggestionString(item)
      );
    });

    var showOption = this.state.dropdownVisible === true ? 'suggestionField-show-dropdown' : 'suggestionField-hide-dropdown';

    return React.createElement(
      Downshift,
      { onChange: this._handleChangeValue },
      function (getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex) {
        return React.createElement(
          'div',
          { className: className + ' suggestionField',
            ref: function ref(elm) {
              return _this2.selectRef = elm;
            },
            tabIndex: 1 },
          React.createElement('input', { className: 'suggestionField-input',
            value: getSuggestionString && getSuggestionString(value) || _this2.state.inputValue,
            placeholder: placeholder,
            onChange: _this2._handleChangeValue,
            onBlur: _this2._handleFieldBlur }),
          React.createElement(
            'div',
            { className: 'suggestionField-dropdown ' + showOption,
              ref: function ref(elm) {
                return _this2.dropdownRef = elm;
              },
              onBlur: _this2._handleFieldBlur,
              tabIndex: 2 },
            suggestionsMap
          )
        );
      }
    );
  };

  SuggestionField.prototype._handleChangeValue = function _handleChangeValue(event) {
    var value = event.target.value;
    this.props.onChange && this.props.onChange(event);
    this.setState(function (curState) {
      return {
        inputValue: value
      };
    });
    if (this.props.suggestions.length > 0) {
      this._changeDropdownVisibility(true);
    } else {
      this._changeDropdownVisibility(false);
    }
  };

  SuggestionField.prototype._handleFieldFocus = function _handleFieldFocus() {
    this._changeDropdownVisibility(true);
    this.dropdownRef.focus();
  };

  SuggestionField.prototype._handleFieldBlur = function _handleFieldBlur() {
    this._changeDropdownVisibility(false);
  };

  SuggestionField.prototype._handleDropdownOptionClick = function _handleDropdownOptionClick(index, item) {
    this._selectOption(index, item);
    this._changeDropdownVisibility(false);
    this.props.onSelect && this.props.onSelect(this.props.suggestions && this.props.suggestions[index] || 0);
  };

  SuggestionField.prototype._changeDropdownVisibility = function _changeDropdownVisibility(visibility, event) {
    this.setState(function (curState) {
      return {
        dropdownVisible: visibility
      };
    });
  };

  SuggestionField.prototype._selectOption = function _selectOption(index, event) {
    this.setState({
      inputValue: this.props.getSuggestionString(this.props.suggestions[index]),
      selectIndex: index
    });
  };

  return SuggestionField;
}(Component);

export default SuggestionField;

SuggestionField.defaultProps = {
  suggestions: [],
  onOptionClick: function onOptionClick(option) {
    console.log('Option: ' + option.name + ' clicked');
  },
  placeholder: 'Suggestion',
  onChangeValue: function onChangeValue(value) {
    console.log(value);
  },
  className: ''
};