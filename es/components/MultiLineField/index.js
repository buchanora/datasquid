import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from '../FieldWrap/';

export default function MultiLineField(props) {
    var name = props.name,
        disabled = props.disabled,
        type = props.type,
        value = props.value,
        error = props.error,
        id = props.id,
        className = props.className,
        onChange = props.onChange,
        onSubmitEditing = props.onSubmitEditing,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        onBlur = props.onBlur,
        onFocus = props.onFocus,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        label = props.label,
        required = props.required,
        uncollapse = props.uncollapse,
        expand = props.expand,
        size = props.size;


    return React.createElement(
        FieldWrap,
        { name: name,
            disabled: disabled,
            dirty: value ? true : false,
            error: error,
            uncollapse: uncollapse,
            label: label,
            expand: expand,
            id: id,
            className: '' + className },
        React.createElement('textarea', { name: name,
            disabled: disabled,
            type: type,
            className: 'field-input multiline',
            onChange: onChange,
            onBlur: onBlur,
            onFocus: onFocus,
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onSubmit: onSubmitEditing,
            value: value,
            rows: size,
            required: required })
    );
}

MultiLineField.defaultProps = {
    className: '',
    value: '',
    size: 3,
    required: false,
    onChange: function onChange() {},
    onSubmitEditing: function onSubmitEditing() {},
    onKeyDown: function onKeyDown() {},
    onKeyUp: function onKeyUp() {},
    onBlur: function onBlur() {},
    onFocus: function onFocus() {},
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {}
};
MultiLineField.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    label: PropTypes.string,
    required: PropTypes.bool,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool,
    size: PropTypes.number
};