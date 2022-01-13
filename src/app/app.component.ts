
import { Component,  OnInit,  } from '@angular/core';
import { ConfigService } from './config.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page: any;
  results: any=[];
  
  
  constructor(private configService: ConfigService,){}
           

ngOnInit() {
  //TO DO: get data from API
  //Inject the ConfigService and calls the getConfig() service method.
  //Because the service method returns an Observable of config data, the component subscribes to the method's return value.
  this.configService.getConfig().subscribe(data => {
    this.results = data;
  }
  );


}
}
