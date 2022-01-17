import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';


@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  public results2: any = [];
  public coffeeItem: any;
  public coffeeId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffeeId = Number(this.route.snapshot.params['id']);
    this.results2 = localStorage.getItem("coffeeData");

    //JSON.parse() constructs JS object or value, enabling us to get any key or value of the object.
    this.results2 = JSON.parse(this.results2);

    this.coffeeItem = this.getItByFilter(this.coffeeId);

  }

  //Function to get only the selected coffee item, filter by id
  public getItByFilter(id: number) {
    // console.log (this.results2.filter((x: { id: number }) => x.id === id));
    return this.results2.filter((x: { id: number }) => x.id === id)
  }

}



