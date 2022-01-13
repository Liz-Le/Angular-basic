import { CoffeeService } from './../coffee.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Coffee } from '../coffee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  page: any;
  results: any=[];

  coffees$!: Observable<any>;
  selectedId = 0;
  
  constructor(private coffeeService: CoffeeService,
              private route: ActivatedRoute) {}

  ngOnInit() {
  //TO DO: get data from API
  //Inject the ConfigService and calls the getConfig() service method.
  //Because the service method returns an Observable of config data, the component subscribes to the method's return value.
  this.coffeeService.getCoffee().subscribe(data => {
    this.results = data;
  }
  );

  // this.coffees$ = this.route.paramMap.pipe(
  //   switchMap(params => {
  //     this.selectedId = parseInt(params.get('id')!, 10);
  //     this.results = params;
  //     return this.coffeeService.getCoffee()
  //   })
  // )

  }

}
