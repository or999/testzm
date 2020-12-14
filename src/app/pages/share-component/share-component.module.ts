import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StableComponent } from './stable/stable.component';
import { DateSelectComponent } from './date-select/date-select.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { TableFormComponent } from './table-form/table-form.component';
import { GroupComponent } from './group/group.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [StableComponent, DateSelectComponent, TableFormComponent, GroupComponent, TaskComponent],
  imports: [
    CommonModule,
    DevUIModule,
    FormsModule,

  ],
  exports: [
    StableComponent, DateSelectComponent
  ]
})
export class ShareComponentModule { }
