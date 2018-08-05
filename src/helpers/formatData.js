import {utils} from 'frontflip';
const {dateMapper, isDate, maskPrice, filterInt} = utils;

export function formatToString(value, type){
  // console.log(Object.keys(value)&&Object.keys(value));
  if(!value){
    return '-'
  }
  // if(isDate(value)){
  //   return dateMapper(value)
  // }
  if( !isNaN( filterInt(value) ) || type === 'number' ){
    return maskPrice(parseInt(value), true)
  }
  if(isDate(value) || type === 'date'){
    return dateMapper(value)
  }
  if(typeof value==='string'){
    return value
  }
  //check if it an object

  if(Array.isArray(value)){
    return value.toString().replace(/,/gi, ', ')
  }
  if(Array.isArray(Object.keys(value))){
    // console.log(value);
    return (value=>Object.keys(value).toString().replace(/,/gi, ', '))(value)
  }
}

export function formatForTable(data){
  return function(tableColumns){
    return data.map((item)=>{
      let columnValues = [], column;

      for(let i = 0; i < tableColumns.length; i++){
        column = tableColumns[i]
        

        columnValues.push({
          label: column.label || column.name,
          key: column.key || column.value,
          value: formatToString(item[column.key] || item[column.value], column.type),
          type: column.type,
          trigger: column.trigger,
          hideOnMobile: column.hideOnMobile,
        })
      }

      return columnValues;
    })
  }
}

export function removeFromList(list, index){
  return list.slice(0, index).concat(list.slice(index+1));
}

export function mapToParentCategories(categories, subCategories){
  let categoryMap
  //loop through each child subCategory
  for (let subCategory in subCategories){
    // search for its parent
    const parent = categories[subCategory].parentKey
    // check if parent already exists in categoryMap
    if (!categoryMap.hasOwnProperty(parent)){
      // if not add parent to category map
      categoryMap[parent]={}
    }
    // add sub to parent in categoryMap
    categoryMap[parent][subCategory]=categories[subCategory].value
  }
  //return categoryMap
  return categoryMap;
}

export function mapToChildCategory(categories){
  let mappedCategories = [];
  for(var category in categories){
    if (categories.hasOwnProperty(category))
    for(var subCategory in categories[category]){
      if (categories[category].hasOwnProperty(subCategory))
      mappedCategories.push(subCategory)
    }
  }
  return mappedCategories;
}
