import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    CoffeeDetailComponent,
    ],
  imports: [
    BrowserModule,
    NgxPaginationModule, 
    HttpClientModule, 
    LayoutModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
