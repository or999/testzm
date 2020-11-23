import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperrootGuard } from 'src/app/core/superroot/superroot.guard';
import { SuperrootComponent } from './superroot.component';
import { SuperrootModule } from './superroot.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [SuperrootGuard],
    canActivateChild: [SuperrootGuard],
    component: SuperrootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperrootRoutingModule { }
