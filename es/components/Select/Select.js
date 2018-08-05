function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SelectButton, CheckListItem, SelectOption } from './common';

var SelectFieldSet = function (_Component) {
  _inherits(SelectFieldSet, _Component);

  function SelectFieldSet(props) {
    _classCallCheck(this, SelectFieldSet);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      dropdownVisible: false
    };

    _this._handleOptionClick = _this._handleOptionClick.bind(_this);

    return _this;
  }

  SelectFieldSet.prototype.render = function render() {
    var _props = this.props,
        disabled = _props.disabled,
        selection = _props.selection,
        style = _props.style,
        multiple = _props.multiple,
        options = _props.options,
        onChange = _props.onChange,
        label = _props.label;


    function getStyle(_style) {
      var newStyle = _style;
      if (_style === 'button') {
        newStyle = 'buttonGrid';
      }
      if (_style === 'dropdown' || _style === 'list') {
        newStyle = 'checkList';
      }
      return newStyle;
    }

    var selectStyle = getStyle(style);

    var optionList = options.map(function (option, index) {

      var _checked = void 0;
      if (multiple) {
        _checked = function _checked(_selections) {
          return _selections[option.value] ? true : false;
        };
      } else {
        _checked = function _checked(_selection) {
          return _selection.value === option.value ? true : false;
        };
      }

      var checked = _checked(selection);

      switch (selectStyle) {
        case 'checkList':
          return React.createElement(CheckListItem, { key: 'check-' + index,
            checkerType: 'tick',
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
        case 'buttonGrid':
          return React.createElement(SelectButton, { key: 'check-' + index,
            iconClass: option.iconClass,
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
        default:
          return React.createElement(SelectOption, { key: 'check-' + index,
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
      }
    });

    return React.createElement(
      'fieldset',
      { className: 'select-group ' + (selectStyle !== 'buttonGrid' ? 'select-list' : 'select-grid') },
      React.createElement(
        'legend',
        { className: 'select-label' },
        label
      ),
      optionList
    );
  };

  SelectFieldSet.prototype._handleOptionClick = function _handleOptionClick(value) {
    this.props.onChange(value);
  };

  return SelectFieldSet;
}(Component);

export default SelectFieldSet;


SelectFieldSet.defaultProps = {
  disabled: false,
  label: 'Select Field Set',
  options: [],
  selection: {},
  onChange: function onChange() {}
};

SelectFieldSet.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expand: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    iconClass: PropTypes.string
  })),
  selection: PropTypes.oneOfType([PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    iconClass: PropTypes.string
  }), PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    iconClass: PropTypes.string
  }))]),
  style: PropTypes.oneOf(['checkList', 'buttonGrid', 'button', 'dropdown'])
};