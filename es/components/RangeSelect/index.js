import React from 'react';
import TextField from '../TextField/';
import FieldGroup from '../FieldGroup/';

export default function RangeSelect(props) {
  var _props$name = props.name,
      name = _props$name === undefined ? 'default' : _props$name,
      onChange = props.onChange,
      onCheck = props.onCheck,
      label = props.label,
      _props$minValue = props.minValue,
      minValue = _props$minValue === undefined ? {} : _props$minValue,
      _props$maxValue = props.maxValue,
      maxValue = _props$maxValue === undefined ? {} : _props$maxValue,
      list = props.list,
      min = props.min,
      max = props.max,
      minLabel = props.minLabel,
      maxLabel = props.maxLabel,
      minError = props.minError,
      maxError = props.maxError;


  var errorText = function errorText(val) {
    if (val > max) return 'Above ' + max;
    if (val < min) return 'Below ' + min;
  };

  return React.createElement(
    FieldGroup,
    null,
    React.createElement(TextField, { type: 'number',
      onKeyUp: onCheck.bind(null, 'min'),
      onChange: onChange.bind(null, 'min'),
      value: minValue.value,
      error: minError && errorText(minValue.value),
      label: 'Min: ' + (minLabel || min),
      name: 'min' }),
    React.createElement(TextField, { type: 'number',
      onKeyUp: onCheck.bind(null, 'max'),
      onChange: onChange.bind(null, 'max'),
      value: maxValue.value,
      error: maxError && errorText(maxValue.value),
      label: 'Max: ' + (maxLabel || max),
      name: 'max' })
  );
}

// export function RangeSelect (props){
//   const {name='default', onChange, label, value, list, min, max} = props;
//   const stop = (max-min)/10;

//   function dataRange(min, max){
//     let options = [], option, num;

//     for (var i=min; i<=max; i+=stop ){
//       num = Math.floor(i)
//       if(i===min || i===max || i===(num/2)){
//         options.push(<span key={`option_${i}`} className='range-list-label'>{num}</span>)
//       }
//     }

//     return(
//       <div id={`${name}-range-list`.toLowerCase()} className='range-label-wrapper'>
//         {options}
//       </div>
//     )
//   }

//   return(
//     <div>
//       <input type='range' list={list} onChange={onChange} min={min} max={max} step={stop}/>
//       {dataRange(min, max)}
//     </div>
//   )
// }