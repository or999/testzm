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
import { ShareComponentModule } from './share-component/share-component.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { WarningComponent } from './warning/warning.component';
import { WsettingComponent } from './wsetting/wsetting.component';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PagenotfoundComponent,
    TableComponent, MapComponent, Child1Component, Child2Component, GrouplistComponent, TasklistComponent, WarningComponent, WsettingComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule,
    ShareComponentModule,
  ],
  // TODO:提供服务的方法，不推荐使用 providers: [MapService]

})
export class PagesModule { }
