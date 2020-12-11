import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService1 {

  constructor(private http: HttpClient) { }
  
  getAbout() {
    return this.http.get('https://api.spacexdata.com/v4/company');
  }
}