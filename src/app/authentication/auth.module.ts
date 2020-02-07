import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './auth.service';
import { StoreModule } from "@ngrx/store";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule {
  constructor() {

  }
}
