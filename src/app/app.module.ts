import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeService } from './coffee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Pagination
import { NgxPaginationModule } from 'ngx-pagination';

//Ng material
// MatCard provides a content container for text, photos, and actions
// MatButton provides a native <button> or <a> element 
// MatToolbar provides a container for headers, titles, or actions.

import{ MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'




@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],


  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
