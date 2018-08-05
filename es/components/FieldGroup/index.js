import React from 'react';
import { PropTypes } from 'prop-types';

export default function FieldRow(props) {

  return React.createElement(
    'div',
    { className: 'fieldGroup ' + (props.uncollapse ? 'fieldGroup--uncollapsed' : '') },
    props.children
  );
}

FieldRow.propTypes = {
  uncollapse: PropTypes.bool
};