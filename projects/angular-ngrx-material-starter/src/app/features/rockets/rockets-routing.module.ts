import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocketsComponent } from './rockets/rockets.component';
// import { RocketsRoutingModule } from './rockets-routing.module';

const routes: Routes = [
  {
    path: '',
    component: RocketsComponent,
    data: { title: 'anms.menu.rockets' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule {}



