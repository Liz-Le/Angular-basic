import { AppRoutingModule } from './app-routing.module';
import { CoffeeService, } from './app/coffee/coffee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { CoffeeModule } from './app/coffee/coffee.module';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    LayoutModule,
    CoffeeModule,
    AppRoutingModule
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
