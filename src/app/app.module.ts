import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetLayoutComponent } from './core/tweet-layout/tweet-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import {AuthenticationService} from './authentication/auth.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TweetLayoutComponent,
    AuthLayoutComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
