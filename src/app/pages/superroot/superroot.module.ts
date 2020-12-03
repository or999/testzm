import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperrootRoutingModule } from './superroot-routing.module';
import { SuperrootComponent } from './superroot.component';
import { DevUIModule } from 'ng-devui';
import { ShareComponentModule } from '../share-component/share-component.module';


@NgModule({
  declarations: [SuperrootComponent],
  imports: [
    CommonModule,
    SuperrootRoutingModule,
    DevUIModule,
    ShareComponentModule
  ],
})
export class SuperrootModule { }
