import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperrootRoutingModule } from './superroot-routing.module';
import { SuperrootComponent } from './superroot.component';


@NgModule({
  declarations: [SuperrootComponent],
  imports: [
    CommonModule,
    SuperrootRoutingModule
  ]
})
export class SuperrootModule { }
