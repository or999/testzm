import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { GroupComponent } from '../share-component/group/group.component';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  basicDataSource: Group[] = null;
  constructor(private dialogService:DialogService) { }
  dataTableOptions = {
    columns: [
        {
            field: 'groupName',
            header: '分组名称',
            fieldType: 'text',
            order: 1
        },
        {
            field: 'groupDescribe',
            header: '分组描述',
            fieldType: 'text',
            order: 2
        },
        {
            field: 'groupChild',
            header: '分组元素数量',
            fieldType: 'number',
            order: 3
        }
    ]
  };
  openPreventCloseModal(): void {
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title: '添加',
      content: GroupComponent,
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
  ngOnInit(): void {
    this.basicDataSource = [
      {
      groupName:'分组一',
      groupDescribe: '这是一个测试分组的描述',
      groupChild:3
      },
      {
        groupName:'分组二',
        groupDescribe: '这是一个测试分组的描述',
        groupChild:3
      },
      {
        groupName:'分组三',
        groupDescribe: '这是一个测试分组的描述',
        groupChild:3
      }
    ]
  }

}
interface Group {
  groupName: string;
  groupDescribe: string;
  groupChild:number
}
