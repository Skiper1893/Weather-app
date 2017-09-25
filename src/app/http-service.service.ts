import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Weather } from './weather';

@Injectable()
export class HttpService {

  constructor( private http: Http) { }

  		getWeather(data) : Observable<Weather[]> {
  			
  	
  			return this.http.post('/api/search', {city: data})
  			.map((res:Response) => res.json())
  			.catch((error:any) => {return Observable.throw(error);
  			});				
  }
}