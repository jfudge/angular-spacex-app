import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';
import { LaunchService } from './services/launches.service';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  launchTitle: string = "About SpaceX API Project";
  launch: any;
  launchCallError: any;
  public loading = true;
  // routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.launchService.getLaunch().subscribe((allLaunch) => {
      setTimeout(() => {
        this.launch = allLaunch;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.launchCallError = error;
    });
  }

}

