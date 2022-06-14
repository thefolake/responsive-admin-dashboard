import React from 'react'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Toolbar, Edit, Selection, Sort, Filter
} from '@syncfusion/ej2-react-grids';
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";
import { NextPage } from "next";

const Customers: NextPage = () => {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customers" />
        <GridComponent
            id="gridcomp"
            dataSource={customersData}
            allowPaging
            allowSorting
            toolbar={['Delete']}
            editSettings={{allowEditing: true, allowDeleting: true}}
            width='auto'
        >
          <ColumnsDirective>
            {customersGrid?.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Selection, Page, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
  );
}

export default Customers