import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  getData() {
      return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  
}