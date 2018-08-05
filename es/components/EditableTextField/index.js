function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

// Define and export the Input field component

var EditableTextField = function (_Component) {
  _inherits(EditableTextField, _Component);

  function EditableTextField(props) {
    _classCallCheck(this, EditableTextField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      focused: false,
      editing: false
    };
    _this._handleActivateEditing = _this._handleActivateEditing.bind(_this);
    _this._handleSubmitEditing = _this._handleSubmitEditing.bind(_this);
    return _this;
  }

  EditableTextField.prototype.render = function render() {
    var _this2 = this;

    // destructure props from this.props
    var _props = this.props,
        index = _props.index,
        active = _props.active,
        defaultfieldValue = _props.defaultfieldValue,
        fieldName = _props.fieldName,
        _props$fieldType = _props.fieldType,
        fieldType = _props$fieldType === undefined ? 'text' : _props$fieldType,
        _props$labelText = _props.labelText,
        labelText = _props$labelText === undefined ? 'label' : _props$labelText,
        _props$fieldValue = _props.fieldValue,
        fieldValue = _props$fieldValue === undefined ? 'value' : _props$fieldValue,
        error = _props.error,
        _props$multiline = _props.multiline,
        multiline = _props$multiline === undefined ? false : _props$multiline,
        _props$onChangeText = _props.onChangeText,
        onChangeText = _props$onChangeText === undefined ? function () {
      console.log('editing');
    } : _props$onChangeText,
        _props$onSubmitEditin = _props.onSubmitEditing,
        onSubmitEditing = _props$onSubmitEditin === undefined ? function () {
      console.log('submited');
    } : _props$onSubmitEditin;

    // Create Error text for input fields

    var displayError = error && React.createElement(
      'span',
      { style: [styles.errorMessage] },
      error
    );

    var displayMode = React.createElement(
      'div',
      { ref: function ref(text) {
          _this2['text_' + index] = text;
        },
        onClick: this._handleActivateEditing.bind(null, index) },
      React.createElement(
        'span',
        { style: styles.editableText },
        fieldValue || defaultfieldValue
      )
    );

    var editingMode = React.createElement('input', { autoFocus: true,
      type: fieldType,
      ref: function ref(input) {
        _this2['input_' + index] = input;
      },
      onChange: onChangeText,
      onSubmit: this._handleSubmitEditing.bind(null, index),
      style: styles.editableInput,
      value: fieldValue,
      defaultvalue: defaultfieldValue });

    // Return the Input field component
    return React.createElement(
      'div',
      { style: styles.editableGroup },
      React.createElement(
        'span',
        { style: styles.label },
        labelText
      ),
      this.state.editing || this.state.focus ? editingMode : displayMode,
      React.createElement(
        'div',
        { style: styles.errorWrap },
        displayError
      )
    );
  };

  EditableTextField.prototype._handleActivateEditing = function _handleActivateEditing(index) {
    this.setState({
      editing: true,
      focused: true
    });
    // this._handleFocus( index );
  };

  EditableTextField.prototype._handleSubmitEditing = function _handleSubmitEditing(index) {
    this.props.onSubmitEditing(index);
    this._handleBlur();
  };

  // Set state to make the input underline change color when input is in focus


  EditableTextField.prototype._handleFocus = function _handleFocus(index) {
    this.setState({
      focused: true
    });
  };

  // revert focused state when the input is out of focus


  EditableTextField.prototype._handleBlur = function _handleBlur(index) {
    this.props.onRevertInputFocus();
    this.setState({
      focused: false,
      editing: false
    });
  };

  return EditableTextField;
}(Component);

// Input field specific styles


export default EditableTextField;
var styles = {
  editableGroup: {
    margin: 0,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#fefefe',
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  editableText: {
    // justifyContent: 'center',
    // backgroundColor: color.lightGray,
    fontWeight: '700',
    height: '24px',
    color: '#fefefe',
    paddingTop: '0',
    paddingLeft: '0',
    paddingBottom: '0',
    paddingRight: 0,
    fontSize: '18px',
    marginTop: 0,
    marginBottom: 0
  },
  editableInput: {
    // justifyContent: 'center',
    // backgroundColor: color.secondary,
    fontWeight: '700',
    height: 24,
    color: '#fefefe',
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    fontSize: 18,
    marginTop: 0,
    marginBottom: 0
  },
  label: {
    color: '#fefefe',
    fontSize: 12,
    paddingBottom: 6
  },
  errorWrap: {
    height: 14,
    marginTop: 2
  },
  errorMessage: {
    textAlign: 'right',
    color: '#fefefe',
    fontSize: 14
  },
  editableError: {
    color: '#fefefe',
    paddingTop: 2,
    paddingBottom: 4,
    paddingLeft: 0,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 0
  }
};