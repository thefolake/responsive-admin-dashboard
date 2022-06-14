import {
  ColumnDirective,
  ColumnsDirective,
  Search,
  GridComponent,
  Inject,
  Page,
  Toolbar
} from '@syncfusion/ej2-react-grids';
import { NextPage } from "next";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees: NextPage = () => {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Employees" />
        <GridComponent
            id="gridcomp"
            dataSource={employeesData}
            allowPaging
            allowSorting
            toolbar={['Search']}
            width='auto'
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar]} />
        </GridComponent>
      </div>
  );
};

export default Employees;