import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/coffeeList", pathMatch: "full" }, //redirect to coffeeList Component, always display the Coffee List component as a Home page
  { path: 'coffeeList', component: CoffeeListComponent },
  { path: 'coffeeDetails/:id', component: CoffeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
