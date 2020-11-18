import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PagenotfoundComponent, TableComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule
  ]
})
export class PagesModule { }
