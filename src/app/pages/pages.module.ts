import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { DateSelectComponent } from './shareComponent/date-select/date-select.component';
import { StableComponent } from './shareComponent/stable/stable.component';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PagenotfoundComponent, StableComponent,
    TableComponent, MapComponent, DateSelectComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule,
  ],
})
export class PagesModule { }
