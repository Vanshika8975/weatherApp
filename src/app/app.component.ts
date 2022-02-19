import { Component } from '@angular/core';
import { ApixuService } from "./apixu.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project';

  formValues:any = {};

  constructor(private apixuService: ApixuService) { }

  // weatherForm(item:any) {
  //   console.warn(item);
  //   this.weatherData = item;
  // }

  sendToAPIXU(formValues:any) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.formValues = data;
      console.log(this.formValues);
    });
  }
}
