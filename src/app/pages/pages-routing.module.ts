import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '../core/user/user.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
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
