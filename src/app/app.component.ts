
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
              private configService:ConfigService, 
              private breakpointObserver: BreakpointObserver) {};
  
  page: any;
  results: any=[];
  results1: any=[];

ngOnInit(){
  

  //Inject the ConfigService and calls the getConfig() service method.
  //Because the service method returns an Observable of config data, the component subscribes to the method's return value.
  this.configService.getConfig().subscribe(data => {
    this.results = data;
  }
  );

  //Responsive Breakpoint
  // this.breakpointObserver.observe(
  //   [
  //     Breakpoints.XSmall,
  //     Breakpoints.Small,
  //     Breakpoints.Medium,
  //     Breakpoints.Large,
  //     Breakpoints.XLarge
  //   ]
  // ).subscribe ( (state: BreakpointState) => {
  //   if (state.breakpoints[Breakpoints.XSmall]) {
  //     console.log ('Matches XSmall viewport');
  //   }
  //   if (state.breakpoints[Breakpoints.Small]){
  //     console.log ('Matches Small viewport');
  //   }
  //   if (state.breakpoints[Breakpoints.Medium]) {
  //     console.log ('Matches Medium viewport');
  //   }
  //   if (state.breakpoints[Breakpoints.Large]) {
  //     console.log ('Matches Large viewport');
  //   }
  //   if (state.breakpoints[Breakpoints.XLarge]) {
  //     console.log ('Matches XLarge viewport');
  //   }
  // });

}
}


  
 
 

  

