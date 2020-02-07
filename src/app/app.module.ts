import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetLayoutComponent } from './core/tweet-layout/tweet-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import {AuthenticationService} from './authentication/auth.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {  TokenInterceptor } from './helpers/interceptor';
import { AuthGuard } from "./core/guards/auth.guard";
import { AuthEffects } from './state/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TweetLayoutComponent,
    AuthLayoutComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducer,{}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor , multi: true },
    AuthGuard,
    AuthEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
