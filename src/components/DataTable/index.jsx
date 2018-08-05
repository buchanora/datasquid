import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {elements} from 'fieldstack';
const {SelectOption} = elements;

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    action: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ])
  })),
  actions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string,
    iconClass: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    scopes: PropTypes.arrayOf(PropTypes.shape({
      scope: PropTypes.oneOf(['ROW', 'TABLE', 'CELL']),
      shouldShow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
      ])
    })),
    render: PropTypes.func
  })),
  imageBasePath: PropTypes.string,
  checkedRows: PropTypes.array,
  allChecked: PropTypes.bool,
  onCheckAll: PropTypes.func,
  onCheckRow: PropTypes.func
}

export default class DataTable extends Component{

  render(){
    const { data = [],
            actions=[],
            imageBasePath = '',
            checkedRows=[],
            allChecked,
            onCheckAll=()=>{},
            onCheckRow,
            onEditItem,
            onDeleteItem,
            onDeleteMultiple } = this.props;

    const headRow = data[0].map((item, index)=>(
      <th   key={`heading_${index}`}
            className={(item.type === 'number' ? 'data-table-right-align' : '' + ' ' + hideOnMobile(item))}>
        {item.type!=='image' && item.label}
      </th>
    ));

    function mapRows(onEditItem, onDeleteItem, onCheckRow, checkedRows, item, index){
        if (Array.isArray(item))
        return <DataRow data={item} 
                        key={`row_${index}`}
                        actions={actions}
                        onEdit={onEditItem}
                        imageBasePath={imageBasePath}
                        onCheck={onCheckRow}
                        checked={checkedRows[index]}
                        onDelete={onDeleteItem}
                        rowIndex={index}/>
    }

    const bodyRows = data.map(mapRows.bind(null, onEditItem, onDeleteItem, onCheckRow, checkedRows));

    return(
      <table className='data-table'>
        <thead>
          <tr>
            <th><SelectOption onChange={onCheckAll} checked={allChecked}/></th>
            {headRow}
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {bodyRows}
        </tbody>
      </table>
    );
  }
}

const defaultProps = {

}

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;




function hideOnMobile(item){
  return item.hideOnMobile === true? 'hide-data-column' :''
}
