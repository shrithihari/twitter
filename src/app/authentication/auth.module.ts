import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { LockscreenComponent } from './lockscreen/lockscreen.component';
 import { AuthenticationService } from './auth.service';
// import { ResetComponent } from './reset/reset.component';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    // Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    // SignupComponent,
    // ForgotComponent,
    // LockscreenComponent, ResetComponent
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
