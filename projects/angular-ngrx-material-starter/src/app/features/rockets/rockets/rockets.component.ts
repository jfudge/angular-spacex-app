import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { ActivatedRoute } from '@angular/router';

import { RocketsService } from './services/rockets.service';

@Component({
  selector: 'anms-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketsComponent implements OnInit {
  rocketsTitle: string = "SpaceX Rockets";
  rocket: any;
  rocketsCallError: any;
  public loading = true;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rocketsService.getRockets().subscribe((rockets) => {
      setTimeout(() => {
        this.rocket = rockets;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.rocketsCallError = error;
    });
  }
  
}