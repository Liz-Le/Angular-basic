import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  page: any;
  results1: any = [];

  coffees$!: Observable<any>;
  selectedId = 0;

  constructor(private coffeeService: CoffeeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //TO DO: get data from API
    //Inject the CoffeeService and calls the getCoffee() method.
    //Because the service method returns an Observable of coffee data, the component subscribes to the method's to return data.
    //then, put those data into localStorage: localStorage(keyname, keyvalue)
    //JSON.stringify to convert Object to JSON string
    this.coffeeService.getCoffee().subscribe(data => {
      localStorage.setItem('coffeeData', JSON.stringify(data))
      this.results1 = data;
    }
    );
  }

}
