import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(formValues:any){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=3342c63fd621b08d995c7e84dbf5e88b_KEY&q=' + formValues.name
    );
    }
  }
