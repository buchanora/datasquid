'use strict';

exports.__esModule = true;
exports.default = FieldWrap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldWrap(props) {
    var children = props.children,
        className = props.className,
        focused = props.focused,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        id = props.id,
        error = props.error,
        label = props.label,
        name = props.name,
        dirty = props.dirty,
        tabIndex = props.tabIndex,
        uncollapse = props.uncollapse,
        expand = props.expand;


    return _react2.default.createElement(
        'span',
        { className: 'field-wrap ' + className + ' ' + (dirty ? 'field--dirty' : '') + ' ' + (focused ? 'field--focus' : '') + ' ' + (error ? 'field--error' : '') + ' ' + (uncollapse ? 'field--uncollapse' : '') + ' ' + (expand ? 'field--expand' : ''),
            onFocus: onFocus,
            onBlur: onBlur,
            tabIndex: tabIndex || 1,
            id: id },
        children,
        _react2.default.createElement(
            'label',
            { className: 'field-label',
                htmlFor: name },
            error || label
        )
    );
}

FieldWrap.defaultProps = {
    className: 'field'
};

FieldWrap.propTypes = {
    name: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    focused: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    error: _propTypes2.default.string,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    label: _propTypes2.default.string,
    tabIndex: _propTypes2.default.number,
    uncollapse: _propTypes2.default.bool,
    expand: _propTypes2.default.bool,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func
};