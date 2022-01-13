import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './app/coffee/coffee-list/coffee-list.component';



const appRoutes: Routes = [
  // { path:'coffees', component: CoffeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
