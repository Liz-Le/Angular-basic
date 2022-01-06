
import { Component } from '@angular/core';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:ConfigService, private configService: ConfigService) {}

ngOnInit(){
  // this.getData();
  this.configService.getData().subscribe((data) => {
    
    console.log(data);
  });
}
}


  
  // p: any;
  // data: any=[];

  // getData(){
  //   this.http.getData().subscribe(
  //     (data) => {
  //       console.log(this.data)
  //     }
  //   );
  // }
  

