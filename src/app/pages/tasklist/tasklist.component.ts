import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent } from 'ng-devui/data-table';
import { DialogService } from 'ng-devui/modal';
import { GroupService } from 'src/app/core/group.service';
import { TaskComponent } from 'src/app/pages/share-component/task/task.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  basicDataSource: any;
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;
  constructor(private dialogService:DialogService,private groupService:GroupService) { }
  dataTableOptions = {
    columns: [
        {
            field: 'taskName',
            header: '任务名称',
            fieldType: 'text',
            order: 1
        },
        {
            field: 'taskDescribe',
            header: '任务描述',
            fieldType: 'text',
            order: 2
        },
      {
        field: 'actionLabel',
        header: '任务操作',
        fieldType: 'test',
        order: 3
      },
      {
        field: 'actionTime',
        header: '任务执行时间',
        fieldType: 'test',
        order: 4
    }
    ]
  };
  openPreventCloseModal(type?: string, data?: any): void {
    const _this=this
    const results = this.dialogService.open({
      id: type && type === 'edit'?'edit':'dialog-service',
      width: '500px',
      maxHeight: '500px',
      showAnimate: false,
      title:type && type === 'edit'?'编辑': '添加',
      content: TaskComponent,
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
        item: data || null,
        getForm: (formData) => {
          type ? _this.basicDataSource.forEach((item, index) => {
            if (formData.id===item.id) {
             this.basicDataSource.splice(index,1,formData)
            }
          }):_this.basicDataSource.push(formData)
           console.log(_this.basicDataSource);
        }
      },
    });
  }
  ngOnInit(): void {
    this.groupService.getTasks().subscribe(
      // this.basicDataSource=(data) => {
      //   data.map(
      //     (item) => {
      //       return {...item,actionLabel:item.taskdo.label}
      //     }
      //   )
      // }
      (data) => {
        this.basicDataSource=data
      }
     )
  }
  delTask() {
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
  editTask() {
    // TODO:编辑分组
    const rows = this.datatable.getCheckedRows();
    const length=rows.length
    switch (length) {
      case 0:
        window.alert('请选择一个任务')
        break;
      case 1:
        this.openPreventCloseModal('edit',rows[0])
        break;
      default:
        window.alert('只能选择一个任务')
        break;
    }
  }
}
