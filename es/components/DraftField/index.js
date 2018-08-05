function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Editor, ContentState, EditorState, RichUtils, convertFromHTML, convertToRaw, convertFromRaw } from 'draft-js';
import FieldWrap from '../FieldWrap/';

var blockTypes = [{ label: null, style: 'header-four', iconClass: 'header' },
// {label:null, style:'paragraph', iconClass:'paragraph'},
{ label: null, style: 'unordered-list-item', iconClass: 'listing-box' }, { label: null, style: 'ordered-list-item', iconClass: 'listing-number' }];

var inlineStyles = [{ label: null, style: 'BOLD', iconClass: 'bold' }, { label: null, style: 'ITALIC', iconClass: 'italic' }];

var DraftField = function (_Component) {
  _inherits(DraftField, _Component);

  function DraftField(props) {
    _classCallCheck(this, DraftField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._onChange = function (editorState) {

      var currentContent = editorState.getCurrentContent();
      var hasText = currentContent.hasText();

      _this.setState(function () {
        return {
          dirty: hasText,
          editorState: editorState
        };
      });

      _this.props.onChange({
        target: {
          value: editorState
        }
      });
    };

    _this.state = {
      editorState: EditorState.createEmpty()
    };
    _this.toggleInlineStyle = _this._toggleInlineStyle.bind(_this);
    _this.toggleBlockType = _this._toggleBlockType.bind(_this);
    _this.onChange = _this._onChange.bind(_this);
    _this._handleKeyCommand = _this._handleKeyCommand.bind(_this);
    _this._handleBlurDraft = _this._handleBlurDraft.bind(_this);
    _this._handleFocusDraft = _this._handleFocusDraft.bind(_this);
    return _this;
  }

  DraftField.prototype.componentWillMount = function componentWillMount() {
    if (this.props.value) {
      this.setState({
        dirty: true
      });
    }
  };

  DraftField.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        label = _props.label,
        expand = _props.expand,
        id = _props.id,
        className = _props.className,
        error = _props.error,
        uncollapse = _props.uncollapse,
        value = _props.value,
        editorState = _props.editorState;


    var getEditorState = function getEditorState(_editorState) {
      if (_editorState) {
        return _editorState;
      }
      return _this2.state.editorState;
    };

    var currentEditorState = getEditorState(editorState || value);

    var inFocus = this.state.inFocus ? true : false;

    var dirty = currentEditorState.getCurrentContent().hasText() ? true : false;

    return React.createElement(
      FieldWrap,
      { className: 'draftField ' + className,
        label: label,
        focused: inFocus,
        dirty: dirty,
        expand: expand,
        id: id,
        error: error,
        tabIndex: 1,
        uncollapse: uncollapse,
        onFocus: this._handleFocusDraft.bind(this),
        onBlur: this._handleBlurDraft.bind(this) },
      React.createElement(
        'header',
        { className: 'draftField-toolbar' },
        React.createElement(InlineStylesToolBar, { onToggle: this.toggleInlineStyle,
          editorState: currentEditorState }),
        React.createElement(BlockTypesToolBar, { onToggle: this.toggleBlockType,
          editorState: currentEditorState })
      ),
      React.createElement(
        'div',
        { className: 'draftField-content' },
        React.createElement(Editor, { editorState: currentEditorState,
          className: 'draftField-editor',
          ref: function ref(el) {
            return _this2.draft = el;
          },
          handleKeyCommand: this._handleKeyCommand,
          onChange: this.onChange })
      )
    );
  };

  DraftField.prototype._handleBlurDraft = function _handleBlurDraft() {
    this.setState({
      inFocus: false
    });
  };

  DraftField.prototype._handleFocusDraft = function _handleFocusDraft() {
    this.draft.focus();
    this.setState({
      inFocus: true
    });
  };

  DraftField.prototype._handleKeyCommand = function _handleKeyCommand(command) {
    var newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  DraftField.prototype._toggleInlineStyle = function _toggleInlineStyle(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  };

  DraftField.prototype._toggleBlockType = function _toggleBlockType(style) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, style));
  };

  return DraftField;
}(Component);

export default DraftField;


DraftField.propTypes = {
  value: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  editorState: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  uncollapse: PropTypes.bool,
  expand: PropTypes.bool,
  handleKeyCommand: PropTypes.func
};

var Tool = function (_Component2) {
  _inherits(Tool, _Component2);

  function Tool(props) {
    _classCallCheck(this, Tool);

    var _this3 = _possibleConstructorReturn(this, _Component2.call(this, props));

    _this3.toggle = _this3._toggle.bind(_this3);
    return _this3;
  }

  Tool.prototype.render = function render() {
    var _props2 = this.props,
        _props2$iconClass = _props2.iconClass,
        iconClass = _props2$iconClass === undefined ? 'settings' : _props2$iconClass,
        _props2$active = _props2.active,
        active = _props2$active === undefined ? '' : _props2$active,
        label = _props2.label,
        showLabel = _props2.showLabel;


    return React.createElement(
      'span',
      { className: 'toolbar-button icofont ' + (active && 'toolbar-button--active') + ' icofont-' + iconClass + ' ',
        onMouseDown: this.toggle },
      showLabel && label && label
    );
  };

  Tool.prototype._toggle = function _toggle(event) {
    event.preventDefault();
    this.props.onToggle(this.props.style);
  };

  return Tool;
}(Component);

function BlockTypesToolBar(props) {
  var editorState = props.editorState;

  var blockType = void 0,
      selection = void 0;
  if (editorState) {
    selection = editorState.getSelection();
    blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  }
  return React.createElement(
    'div',
    { className: 'draft-tool-group' },
    blockTypes.map(function (type, index) {
      return React.createElement(Tool, { key: type.style + '-' + index,
        active: type.style === blockType,
        iconClass: type.iconClass,
        onToggle: props.onToggle,
        style: type.style });
    })
  );
}

function InlineStylesToolBar(props) {
  var currentStyle = void 0;
  if (props.editorState) {
    currentStyle = props.editorState.getCurrentInlineStyle();
  }

  return React.createElement(
    'div',
    { className: 'draft-tool-group' },
    inlineStyles.map(function (type, index) {
      return React.createElement(Tool, { key: type.style + '-' + index,
        iconClass: type.iconClass,
        onToggle: props.onToggle,
        active: currentStyle && currentStyle.has(type.style),
        style: type.style });
    })
  );
}

export function serializeDraftState(editorState) {
  if (!editorState) {
    return JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()));
  }
  var currentContent = editorState.getCurrentContent();
  var valueString = JSON.stringify(convertToRaw(currentContent));
  return valueString;
}

export function parseDraftState(_value) {
  if (!_value || _value === '') {
    return EditorState.createEmpty();
  }
  try {
    var JSONobj = JSON.parse(_value);
    return EditorState.createWithContent(convertFromRaw(JSONobj));
  } catch (e) {
    var savedHTML = convertFromHTML(_value);
    return EditorState.createWithContent(ContentState.createFromBlockArray(savedHTML.contentBlocks, savedHTML.entityMap));
  }
}