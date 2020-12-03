import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StableComponent } from './stable/stable.component';
import { DateSelectComponent } from './date-select/date-select.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StableComponent, DateSelectComponent],
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
