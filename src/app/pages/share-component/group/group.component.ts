import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { GroupService } from 'src/app/core/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit { 
  selectOptions:any
  selectOptionsTask = [
    {id:1,'label':'任务一'},
    {id:2,'label':'任务二'},
    {id:3,'label':'任务三'},
    {id:4,'label':'任务四'},
  ]
  formData = {
    groupName:'分组一',
    groupDescribe: '描述',
    groupElement: [{ id: 1, 'label': 'HNJS-0001' }],
    groupTask:[]
  }
  @Input() data: any;
  constructor(private groupService:GroupService) { }
  ngOnInit(): void {
    let item=this.data.item
    if (item) {
      this.formData.groupName = item.groupName
      this.formData.groupElement = item.groupElement
      this.formData.groupDescribe = item.groupDescribe
      this.formData.groupTask=item.groupTask
    }
    this.groupService.getSource().subscribe(data => {
     this.selectOptions=data
    })
    
  }
  submitForm({valid}): void{
    if (valid) {
      let id = this.data.item?.id ? this.data.item.id : Math.floor(Math.random()*1000)      
      let group={...this.formData,groupChild:this.formData.groupElement.length,id,groupTaskCount:this.formData.groupTask.length}
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
