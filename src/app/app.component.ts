
import { Component } from '@angular/core';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configService:ConfigService) {}

  page: any;
  results: any=[];
  results1: any=[];

ngOnInit(){
  //Inject the ConfigService and calls the getConfig() service method.
  //Because the service method returns an Observable of config data, the component subscribes to the method's return value.
  this.configService.getConfig().subscribe(data => {
    console.log(data);
    this.results = data;
  }
  );


}
}


  
 
 

  

