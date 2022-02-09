import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';


@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  public results2: any = []; //It will be an array of 50 coffee items
  public coffeeItem: any;
  public coffeeId: number = 0;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffeeId = Number(this.route.snapshot.params['id']);//fetch the parameter and format it as a number
    this.results2 = localStorage.getItem("coffeeData"); //get data from localStorage
    // console.log(localStorage.getItem("coffeeData"));

    //JSON.parse() constructs JS object or value, enabling us to get any key or value of the object.
    this.results2 = JSON.parse(this.results2);
    this.coffeeItem = this.getItByFilter(this.coffeeId);
    console.log(this.coffeeItem)
  }

  //Function to get only the selected coffee item, filter by id
  public getItByFilter(id: number) {
    console.log (this.results2.filter((x: { id: number }) => x.id === id));
    return this.results2.filter((x: { id: number }) => x.id === id)
  }
}



