'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          return _react2.default.createElement(_common.CheckListItem, { key: 'check-' + index,
            checkerType: 'tick',
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
        case 'buttonGrid':
          return _react2.default.createElement(_common.SelectButton, { key: 'check-' + index,
            iconClass: option.iconClass,
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
        default:
          return _react2.default.createElement(_common.SelectOption, { key: 'check-' + index,
            disabled: disabled,
            checked: checked,
            label: option.label || option.name,
            onChange: onChange.bind(null, option) });
      }
    });

    return _react2.default.createElement(
      'fieldset',
      { className: 'select-group ' + (selectStyle !== 'buttonGrid' ? 'select-list' : 'select-grid') },
      _react2.default.createElement(
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
}(_react.Component);

exports.default = SelectFieldSet;


SelectFieldSet.defaultProps = {
  disabled: false,
  label: 'Select Field Set',
  options: [],
  selection: {},
  onChange: function onChange() {}
};

SelectFieldSet.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  expand: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    iconClass: _propTypes2.default.string
  })),
  selection: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    iconClass: _propTypes2.default.string
  }), _propTypes2.default.objectOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    iconClass: _propTypes2.default.string
  }))]),
  style: _propTypes2.default.oneOf(['checkList', 'buttonGrid', 'button', 'dropdown'])
};