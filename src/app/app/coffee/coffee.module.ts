import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoffeeDetailComponent } from "./coffee-detail/coffee-detail.component";
import { CoffeeListComponent } from "./coffee-list/coffee-list.component";
import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeService } from './coffee.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        CoffeeRoutingModule
    ],
    declarations:[
        CoffeeListComponent,
        CoffeeDetailComponent
    ],
    providers: [
        CoffeeService
    ]
})

export class CoffeeModule {}