import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches() {
    return this.http.get('https://api.spacexdata.com/v4/launches/past');
  }

  getSingleLaunch(rocket_id) {
    return this.http.get('https://api.spacexdata.com/v4/launches/past' + rocket_id);
  }
  
}