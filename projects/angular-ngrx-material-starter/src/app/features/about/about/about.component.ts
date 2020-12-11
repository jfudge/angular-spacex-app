import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


import { AboutService1 } from './services/about.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  aboutTitle: string = "About SpaceX API Project";
  aboutItem: any;
  aboutCallError: any;
  public loading = true;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private aboutService: AboutService1) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about) => {
      setTimeout(() => {
        this.aboutItem = about;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.aboutCallError = error;
    });
  }

}