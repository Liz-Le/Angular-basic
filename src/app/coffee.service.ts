import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';
      
  constructor(private http: HttpClient) { } 

  //HttpClient.get() method which sends an HTTP request,then returns an Observable that emits the requested data.
  getCoffee() {
      return this.http.get(this.url);
  } 
  
}

