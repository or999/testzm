import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperrootGuard } from '../core/superroot/superroot.guard';
import { UserGuard } from '../core/user/user.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
import { SuperrootComponent } from './superroot/superroot.component';
import { TableComponent } from './table/table.component';

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
