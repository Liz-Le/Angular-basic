import { ConfigService } from './config.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    NgxPaginationModule, 
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
