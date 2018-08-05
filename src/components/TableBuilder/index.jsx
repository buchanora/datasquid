import React from 'react';

import Button from 'frontflip-ui';
import DataTable from '../components/DataTable/';
import Header from 'frontflip-ui';
import {SectionHead} from 'typedeck';
import {Block} from 'alphablock';
import Pagination, {PageRange} from 'frontflip-ui';
import Scroller from "frontflip-ui";

export default function TableBuilder({DATA, actions={}, options={}} ){
  let   onEditItem,
        onCheckAll,
        onCheckRow,
        onDeleteItem,
        onDeleteMultiple,
        actionArray = actions; // To hold actions temporarily;
  if (!Array.isArray(actions)){
    onCheckRow = actions.onCheckRow;
    onCheckAll = actions.onCheckAll;
    onEditItem = actions.onEditItem;
    onDeleteItem = actions.onDeleteItem;
    onDeleteMultiple = actions.onDeleteMultiple;
    actionArray = actions.extras || [];
  }

  let   { singularItem,
          pluralItem,
          addItemButtonLink,
          count,
          limit=10,
          activePage,
          onPageClick } = options;

  let mappedData;
  count = Number(count);
  limit = Number(limit);
  activePage= Number(activePage);


  if (Array.isArray(DATA)){

    const dataLength = DATA.length;
    const pageCount = Math.ceil(count/limit);

    const pageStart = ((activePage-1) * limit) + 1,
          lastPage = pageCount == activePage? true: false,
          lastPageEnd = ((activePage-1) * limit) + (count % limit),
          pageEnd =  lastPage? lastPageEnd: activePage * limit;
    const pageRange = pageStart == pageEnd? `${pageStart}-${lastPageEnd}`: `${pageStart}-${pageEnd}`
    // console.log(pageStart);
    // console.log(pageEnd);
    dataLength > 0
    ? mappedData =  (
      <Block>
        <Scroller/>
        <Header>
          {/* <Heading textAlign='left'>
            {`Showing ${pageRange} of ${count} ${count===1 ?singularItem :pluralItem}`}
          </Heading> */}
          <PageRange  count={count}
                      activePage={activePage}
                      limit={limit}
                      singularItem={singularItem}
                      pluralItem={pluralItem}/>


            <Button     type='link'
                        to={addItemButtonLink}
                        text={`Add ${singularItem}`}
                        size='medium'
                        iconLeft='icofont icofont-ui-add'
                        style='solidPrimary'/>
        </Header>

        <div className='data-table-wrap'>
          <DataTable  data={DATA}
                      checkedRows={options.checkedRows}
                      allChecked={options.allChecked}
                      onCheckRow={onCheckRow}
                      onCheckAll={onCheckAll}
                      actions={actionArray}
                      imageBasePath={options.imageBasePath}
                      onEditItem={onEditItem}
                      onDeleteItem={onDeleteItem}
                      onDeleteMultiple={onDeleteMultiple}/>
        </div>
        {
          count && <Pagination  pageCount={pageCount}
                                currentPage={activePage}
                                getPagePath={onPageClick}/>
        }
      </Block>
      )

    : mappedData = (
        <Block style={{textAlign:'center'}} key='noData'>
          <Scroller/>
          <SectionHead textAlign='center'>
            {`You have no ${pluralItem}...yet!`}
          </SectionHead>
          <Button     type='link'
                      to={addItemButtonLink}
                      text={`Add ${singularItem}`}
                      size='medium'
                      iconLeft='icofont icofont-ui-add'
                      style='solidPrimary'/>
        </Block>
    );
  }
  return mappedData;
}
