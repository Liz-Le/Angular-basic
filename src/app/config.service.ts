import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable()
export class ConfigService {
  // private url = 'https://jsonplaceholder.typicode.com/todos';
  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';
      
  constructor(private http: HttpClient) { } 

  //Returns Observable of Config by HttpClient.get() method which send an HTTP request, 
  // then returns an Observable that emits the requested data.
  getConfig() {
      return this.http.get(this.url);
  }
  
  // getConfigWithParams(){
  //   let params1 = new HttpParams().set("userId", "1");
  //   return this.http.get(this.url, {params:params1})
  // }

  
}

