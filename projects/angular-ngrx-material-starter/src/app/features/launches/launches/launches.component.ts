import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { ActivatedRoute } from '@angular/router';

import { LaunchesService } from './services/launches.service';

@Component({
//   selector: 'anms-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent implements OnInit {
  launchesTitle: string = "SpaceX Rockets";
  launch: any;
  launchesCallError: any;
  public loading = true;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getLaunches().subscribe((launches) => {
      setTimeout(() => {
        this.launch = launches;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.launchesCallError = error;
    });
  }
  
}