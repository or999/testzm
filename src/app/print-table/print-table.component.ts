import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-table',
  templateUrl: './print-table.component.html',
  styleUrls: ['./print-table.component.css']
})
export class PrintTableComponent implements OnInit {
  basicDataSource: Array<SourceType>=[]
  dataTableOptions = {
    columns: [
      {
        field: 'name',
        header: '灯具名称',
        fieldType: 'text'
      },
      {
        field: 'type',
        header: '灯具类型',
        fieldType: 'text'
      },
      {
        field: 'online',
        header: '在线状态',
        fieldType: 'online'
      },
      {
        field: 'on',
        header: '开关',
        fieldType: 'on'
      },
      {
        field: 'light',
        header: '亮度',
        fieldType: 'light'
      },
      {
        field: 'address',
        header: '灯控器地址',
        fieldType: 'number'
      }
    ]
  };
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params);
      // this.basicDataSource = JSON.parse(params['originSource']);
       this.basicDataSource =JSON.parse(params.originSource)
      setTimeout(() => {
        window.print()
      })
     })
  }
}
interface SourceType {
  address: number;
  name: string;
  type: string;
  online: boolean;
  on: boolean;
  light: number;
}
