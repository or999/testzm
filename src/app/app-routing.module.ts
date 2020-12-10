import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './core/user/user.guard';
import { LoginComponent } from './login/login.component';
import { PrintTableComponent } from './print-table/print-table.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'print',
    component: PrintTableComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule),
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
    canLoad: [UserGuard]
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
   { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
