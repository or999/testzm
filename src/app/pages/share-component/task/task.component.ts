import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { GroupService } from 'src/app/core/group.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  selectOptionsTask: any;
  formData = {
    taskName:'任务一',
    taskDescribe: '描述',
    taskdo: { id: 1, label: '操作一' },
  }
  @Input() data: any;
  constructor(private groupService:GroupService) { }
  ngOnInit(): void {
    let item=this.data.item
    if (item) {
      this.formData.taskName = item.taskName
      this.formData.taskdo = item.taskdo
      this.formData.taskDescribe = item.taskDescribe
    }
    this.groupService.getActions().subscribe(data => {
     this.selectOptionsTask=data
    })
    
  }
  submitForm({valid}): void{
    if (valid) {
      let id = this.data.item?.id ? this.data.item.id : Math.floor(Math.random()*1000)      
       let group={...this.formData,id,actionLabel:this.formData.taskdo.label}
       this.data.getForm(group)
      of(this.formData).pipe(
        map((val) => 'success'),  // 模拟接口处理
        delay(500)
      ).subscribe((res) => {
        if (res === 'success') {
          console.log('success', '成功', '添加成功');
        }
      });
    } else {
      console.log('error', '错误', '请检查所有校验项是否通过');
    }
  }
   
}
