import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';



const coffeeRoutes: Routes = [
  
  {path:'coffees', component: CoffeeListComponent},
  {path: 'coffee/:id', component: CoffeeDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(coffeeRoutes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
