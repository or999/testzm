import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperrootGuard } from '../core/superroot/superroot.guard';
import { UserGuard } from '../core/user/user.guard';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { MapComponent } from './map/map.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
import { SuperrootComponent } from './superroot/superroot.component';
import { TableComponent } from './table/table.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [UserGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'table',
      component: TableComponent
    },
    {
      path: 'map',
      component: MapComponent
    },
    {
      path: 'child1',
      component: Child1Component
    },
    {
      path: 'child2',
      component: Child2Component
    },
    {
      path: 'grouplist',
      component: GrouplistComponent
    },
    {
      path: 'tasklist',
      component: TasklistComponent
    },
    {
      path: 'superroot',
      canActivate: [SuperrootGuard],
      canActivateChild: [SuperrootGuard],
      canLoad: [SuperrootGuard],
      loadChildren: () => import('./superroot/superroot.module').then(m => m.SuperrootModule)

    },
    {
      path: 'pagenotfound',
      component: PagenotfoundComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
