import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataTableComponent } from 'ng-devui/data-table';
import { DialogService } from 'ng-devui/modal';
import { GroupService } from 'src/app/core/group.service';
import { GroupComponent } from '../share-component/group/group.component';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  basicDataSource: Group[] = null;
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;
  constructor(private dialogService:DialogService,private groupService:GroupService) { }
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
  openPreventCloseModal(type?:string,data?:any): void {
    const results = this.dialogService.open({
      id: type && type === 'edit'?'edit':'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title:type && type === 'edit'?'编辑': '添加',
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
      data: {
       item:data||null
      },
    });
  }
  ngOnInit(): void {
    this.groupService.getGrouplist().subscribe(
       (data)=>{this.basicDataSource =data}
     )
  }
  delGroup() {
    //TODO:删除分组
    const rows = this.datatable.getCheckedRows();
    // console.log(rows);
    if (rows.length!==0) {
      this.basicDataSource.forEach((item,index) => {
        if (rows.indexOf(item)!==-1) {
          this.basicDataSource.splice(index,1)
        }
      })
    }    
  }
  editGroup() {
    // TODO:编辑分组
    const rows = this.datatable.getCheckedRows();
    console.log(rows);
    const length=rows.length
    switch (length) {
      case 0:
        window.alert('请选择一个分组')
        break;
      case 1:
        this.openPreventCloseModal('edit',rows[0])
        break;
      default:
        window.alert('只能选择一个分组')
        break;
    }
  }
}
interface Group {
  groupName: string;
  groupDescribe: string;
  groupChild:number
}
