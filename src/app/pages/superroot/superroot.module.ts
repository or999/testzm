import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperrootRoutingModule } from './superroot-routing.module';
import { SuperrootComponent } from './superroot.component';
import { DevUIModule } from 'ng-devui';
import { StableComponent } from '../shareComponent/stable/stable.component';


@NgModule({
  declarations: [SuperrootComponent],
  imports: [
    CommonModule,
    SuperrootRoutingModule,
    DevUIModule
  ],
})
export class SuperrootModule { }
