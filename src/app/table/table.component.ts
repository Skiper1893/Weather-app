import { Component, Input } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HttpService]
})

export class TableComponent {
 
	city : string;
	receivedWeather : any;

 constructor( private HttpService :HttpService) {}

  loadWeather() {
    this.HttpService.getWeather(this.city).subscribe(data => {
    this.receivedWeather = data;
    }); 
  }
}
