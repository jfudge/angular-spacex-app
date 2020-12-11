import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesComponent } from '../launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
    data: { title: 'anms.menu.launches' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {}
