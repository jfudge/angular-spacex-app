import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


// import { SharedModule } from '../../shared/shared.module';

import { LaunchesComponent } from '../launches/launches.component';
import { LaunchesRoutingModule } from './launches-routing.module';

@NgModule({
  declarations: [LaunchesComponent],
  imports: [CommonModule, MatCardModule, LaunchesRoutingModule]
})
export class LaunchesModule {}
