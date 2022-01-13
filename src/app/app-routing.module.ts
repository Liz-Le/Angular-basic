import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';


const routes: Routes = [
  {path: 'coffeeDetails', component: CoffeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
