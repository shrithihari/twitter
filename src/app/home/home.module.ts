import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutes } from './home.routing';
import { TweetComponent } from './tweet/tweet.component';


import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    TweetComponent


  ],
  providers: [HomeService]
})
export class HomeModule {
  constructor() {

  }
}
