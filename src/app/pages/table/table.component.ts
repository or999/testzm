import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { originSource, SourceType } from './mock-data';
import { TableWidthConfig, TableCheckOptions, DataTableComponent } from 'ng-devui/data-table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    dob: new Date(1990, 12, 1),
    gender: 'Male',
  },
  {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    gender: 'Female',
    dob: new Date(1989, 1, 1),
  }, ];
  // TODO:父组件通过viewchild与子组件通信，使用子组件d-data-table 的公用方法
  // TODO:通过viewchild也可引用本地变量
  @ViewChild('div') div: 'div';
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;
  constructor() { }
  // totalData = JSON.parse(JSON.stringify(originSource));
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text'
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text'
      },
      {
        field: 'gender',
        header: 'Gender',
        fieldType: 'text'
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date'
      }
    ]
  };
  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '55px'
    },
    {
      field: '#',
      width: '50px'
    },
    {
      field: 'firstName',
      width: '150px'
    },
    {
      field: 'lastName',
      width: '150px'
    },
    {
      field: 'gender',
      width: '150px'
    },
    {
      field: 'dob',
      width: '200px'
    }
  ];

  checkOptions: TableCheckOptions[] = [
    {
      label: '全选所有数据',
      onChecked: this.checkTotalData.bind(this)
    },
    {
      label: '全选当前页数据',
      onChecked: this.checkPageData.bind(this)
    }
  ];

  pager = {
    total: 12,
    pageIndex: 1,
    pageSize: 6
  };

  totalDataChecked = false;

  checkTotalData(): void {
    this.datatable.setTableCheckStatus(
      {
        pageAllChecked: true
      }
    );
    this.totalDataChecked = true;
  }

  checkPageData(): void {
    this.datatable.setTableCheckStatus(
      {
        pageAllChecked: true
      }
    );
    this.totalDataChecked = false;
  }

  onRowCheckChange(checked, rowIndex, nestedIndex, rowItem): void {
    rowItem.$checked = checked;
    rowItem.$halfChecked = false;
    this.datatable.setRowCheckStatus({
      rowIndex,
      nestedIndex,
      rowItem,
      checked
    });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.div);

  }
  onPageIndexChange(pageIndex): void {
    this.basicDataSource = JSON.parse(JSON.stringify(originSource.slice(pageIndex - 1, pageIndex + 5)));
    setTimeout(() => {
      if (this.totalDataChecked) {
        this.datatable.setTableCheckStatus(
          {
            pageAllChecked: true
          }
        );
      } else {
        this.datatable.setTableCheckStatus(
          {
            pageAllChecked: false
          }
        );
      }
    });
  }
}
