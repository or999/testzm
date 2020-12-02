import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TableWidthConfig, TableCheckOptions, DataTableComponent } from 'ng-devui/data-table';
import { interval } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  tabActiveId = 'tab1';
  tabItems = [
    {
      id: 'tab1',
      title: 'Tab1',
      content: `这是Tab1的内容`
    },
    {
      id: 'tab2',
      title: 'Tab2',
      content: `这是Tab2的内容`,
      disabled: false
    },
    {
      id: 'tab3',
      title: 'Tab3',
      content: `这是Tab3的内容`
    },
  ];
  constructor() { }

  // TODO:父组件通过viewchild与子组件通信，使用子组件d-data-table 的公用方法
  // TODO:通过viewchild也可引用本地变量
  // @ViewChild('div') div: 'div';
  // @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;
  // totalData = JSON.parse(JSON.stringify(originSource));
  ngOnInit(): void {

  }

}
