import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }
  
  getLaunch() {
    return this.http.get('https://api.spacexdata.com/v4/launches/past/');
  }
}