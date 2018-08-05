import React from 'react';
import PropTypes from 'prop-types';

export default function FieldWrap(props) {
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


    return React.createElement(
        'span',
        { className: 'field-wrap ' + className + ' ' + (dirty ? 'field--dirty' : '') + ' ' + (focused ? 'field--focus' : '') + ' ' + (error ? 'field--error' : '') + ' ' + (uncollapse ? 'field--uncollapse' : '') + ' ' + (expand ? 'field--expand' : ''),
            onFocus: onFocus,
            onBlur: onBlur,
            tabIndex: tabIndex || 1,
            id: id },
        children,
        React.createElement(
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
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    focused: PropTypes.bool,
    dirty: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    tabIndex: PropTypes.number,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};