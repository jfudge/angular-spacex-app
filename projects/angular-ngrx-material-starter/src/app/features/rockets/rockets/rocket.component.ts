import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocketsService } from './services/rockets.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  rocket;
  rocketsCallError: any;
  public loading = true;

  constructor(
    private rocketsService: RocketsService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const rocket_id = params.rocket_id;

      this.rocketsService.getSingleRocket(rocket_id).subscribe(response => {
        setTimeout(() => {
          this.rocket = response;
          this.loading = false;
        }, 1000);
      }), (error) => {
        this.rocketsCallError = error;
      }
    });
  }

}