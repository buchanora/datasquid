import React from 'react';
import { PropTypes } from 'prop-types';

export default function UploadField(props) {
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

        return React.createElement(
                'div',
                { className: 'uploadField-wrap' },
                React.createElement(
                        'label',
                        { className: icon || showIcon ? 'upload-icon' : 'upload-label',
                                htmlFor: name },
                        label ? React.createElement(
                                'span',
                                { className: 'uploadField' },
                                React.createElement('i', { className: 'icofont icofont-camera' }),
                                label
                        ) : React.createElement('i', { className: 'icofont icofont-camera' })
                ),
                React.createElement('input', { name: name,
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
        disabled: PropTypes.bool,
        label: PropTypes.string,
        multiple: PropTypes.bool,
        name: PropTypes.string,
        onChange: PropTypes.func,
        required: PropTypes.bool,
        showIcon: PropTypes.bool
};