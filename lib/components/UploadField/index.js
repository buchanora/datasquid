'use strict';

exports.__esModule = true;
exports.default = UploadField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadField(props) {
        var _props$name = props.name,
            name = _props$name === undefined ? '' : _props$name,
            icon = props.icon,
            showIcon = props.showIcon,
            _props$disabled = props.disabled,
            disabled = _props$disabled === undefined ? false : _props$disabled,
            _props$onChange = props.onChange,
            onChange = _props$onChange === undefined ? function () {} : _props$onChange,
            _props$label = props.label,
            label = _props$label === undefined ? '' : _props$label,
            _props$multiple = props.multiple,
            multiple = _props$multiple === undefined ? false : _props$multiple,
            _props$required = props.required,
            required = _props$required === undefined ? false : _props$required;


        var isRequired = required && true;

        return _react2.default.createElement(
                'div',
                { className: 'uploadField-wrap' },
                _react2.default.createElement(
                        'label',
                        { className: icon || showIcon ? 'upload-icon' : 'upload-label',
                                htmlFor: name },
                        label ? _react2.default.createElement(
                                'span',
                                { className: 'uploadField' },
                                _react2.default.createElement('i', { className: 'icofont icofont-camera' }),
                                label
                        ) : _react2.default.createElement('i', { className: 'icofont icofont-camera' })
                ),
                _react2.default.createElement('input', { name: name,
                        id: name,
                        disabled: disabled,
                        type: 'file',
                        className: 'upload-field',
                        multiple: multiple,
                        required: isRequired,
                        onChange: onChange })
        );
}

UploadField.propTypes = {
        disabled: _propTypes.PropTypes.bool,
        label: _propTypes.PropTypes.string,
        multiple: _propTypes.PropTypes.bool,
        name: _propTypes.PropTypes.string,
        onChange: _propTypes.PropTypes.func,
        required: _propTypes.PropTypes.bool,
        showIcon: _propTypes.PropTypes.bool
};