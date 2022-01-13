
import { Component, OnInit } from '@angular/core';
import { CoffeeService, } from '../coffee.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Coffee } from '../coffee';


@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  // page: any;
  // details: any=[];
  coffee$!: Observable<any>;
  
  constructor(private coffeeService: CoffeeService,
              private route: ActivatedRoute,
              private router: Router,) {}

  ngOnInit() {

    this.coffee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.coffeeService.getCoffee(params.get('id')!))
    );

}

backtoCoffees(coffee: Coffee){
  const coffeeId = coffee ? coffee.id: null;

  this.router.navigate(['/coffees', {id: coffeeId, foo: 'foo' }]);

}


}

