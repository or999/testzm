import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TableWidthConfig, TableCheckOptions, DataTableComponent } from 'ng-devui/data-table';
import { DialogService } from 'ng-devui/modal';
import { interval } from 'rxjs';
import { TableFormComponent } from '../table-form/table-form.component';
@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.css']
})
export class StableComponent implements OnInit {
  constructor(private dialogService: DialogService) { }
  // TODO:父组件通过viewchild与子组件通信，使用子组件d-data-table 的公用方法
  // TODO:通过viewchild也可引用本地变量
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;

  // totalData = JSON.parse(JSON.stringify(originSource));
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
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
      field: 'name',
      width: '150px'
    },
    {
      field: 'type',
      width: '150px'
    },
    {
      field: 'online',
      width: '100px'
    },
    {
      field: 'on',
      width: '100px'
    },
    {
      field: 'light',
      width: '250px'
    },
    {
      field: 'address',
      width: '150px'
    },
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
  beforeChange = (currentValue) => {
    // console.log('currentValue: ' + currentValue);
    return new Promise((resolve) => {
      const results = this.dialogService.open({
        id: 'dialog-service',
        width: '300px',
        maxHeight: '600px',
        showAnimate: false,
        title: 'Toggle?',
        content: '确定要更改该灯具状态吗?',
        backdropCloseable: false,
        dialogtype: 'standard',
        buttons: [
          {
            cssClass: 'stress',
            text: '确定',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(true);
            }
          },
          {
            id: 'btn-cancel',
            cssClass: 'common',
            text: '取消',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(false);
            }
          },
        ]
      });
    });
  }
  onChange2(item): void {
    console.log(item);
  }
  lightChange(item): void {
    console.log(item);
  }
  ngOnInit(): void {
  }
  onPageIndexChange(pageIndex): void {
    // TODO:测试可观察对象
    // const secondsCounter = interval(1000);
    // secondsCounter.subscribe((n) => {
    //   console.log(`It's been ${n} seconds since subscribing!`);
    // });
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
  openPreventCloseModal(): void {
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title: '添加',
      content: TableFormComponent,
      dialogtype: 'standard',
      // beforeHidden: () => this.beforeHidden(),
      backdropCloseable: true,
      buttons: [
        {
          cssClass: 'stress',
          text: '关闭',
          handler: ($event: Event) => {
            results.modalInstance.hide();
            //  TODO: 弹窗关闭之后，在这里重新请求数据
          },

        }
      ],
    });
  }

  beforeHidden(): Promise<boolean> {
    return new Promise((resolve) => {
      const results = this.dialogService.open({
        id: 'dialog-service',
        width: '300px',
        maxHeight: '600px',
        showAnimate: false,
        title: '',
        content: '是否保存修改内容？',
        backdropCloseable: false,
        dialogtype: 'warning',
        buttons: [
          {
            cssClass: 'primary',
            text: '保存',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(true);
            }
          },
          {
            id: 'btn-cancel',
            cssClass: 'common',
            text: '不保存',
            handler: ($event: Event) => {
              results.modalInstance.hide();
              resolve(true);
            }
          },
        ]
      });
    });
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

const originSource = [
  {
    address: 8675849037250,
    name: 'HNJS-0001',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2.  3.
    online: true,
    on: true,
    light: 100
  },
  {
    address: 8675849037250,
    name: 'HNJS-0002',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 90
  },
  {
    address: 8675849037250,
    name: 'HNJS-0003',
    type: '顺⾈zigbee灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 88
  },
  {
    address: 8675849037250,
    name: 'HNJS-0004',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: false,
    light: 70
  },
  {
    address: 8675849037250,
    name: 'HNJS-0005',
    type: '顺⾈zigbee灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: false,
    on: true,
    light: 50
  },
  {
    address: 8675849037250,
    name: 'HNJS-0006',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: false,
    light: 100
  },
  {
    address: 8675849037250,
    name: 'HNJS-0007',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 60
  },
  {
    address: 8675849037250,
    name: 'HNJS-0008',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: false,
    on: false,
    light: 99
  },
  {
    address: 8675849037250,
    name: 'HNJS-0009',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 100
  },
  {
    address: 8675849037250,
    name: 'HNJS-0010',
    type: '华为NB灯控器-1',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 96
  },
  {
    address: 8675849037250,
    name: 'HNJS-0011',
    type: '⽅⼤NB灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 44
  },
  {
    address: 8675849037250,
    name: 'HNJS-0012',
    type: ' 顺⾈zigbee灯控器',
    // 1. 华为NB灯控器-1 2. ⽅⼤NB灯控器 3. 顺⾈zigbee灯控器
    online: true,
    on: true,
    light: 55
  },
];
