import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
   // MaterialModule
   DevUIModule
  ]
})
export class PagesModule { }
