import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../../shared/shared.module';

import { RocketsComponent } from '../rockets/rockets.component';
import { RocketsRoutingModule } from '../rockets-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [RocketsComponent],
  imports: [CommonModule, MatCardModule, RocketsRoutingModule]
})
export class RocketsModule {}




