import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { LockscreenComponent } from './lockscreen/lockscreen.component';
// import { ResetComponent } from './reset/reset.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component:LoginComponent
    // children: [
    //   {
    //     path: 'Login',
    //     component: LoginComponent
    //   }
    //   ,
    //   {
    //     path: 'signup',
    //     component: SignupComponent
    //   },
    //   {
    //     path: 'forgot',
    //     component: ForgotComponent
    //   },
    //   {
    //     path: 'reset/:id',
    //     component: ResetComponent
    //   },
    //   {
    //     path: 'lockscreen',
    //     component: LockscreenComponent
    //   }
    // ]
  }
];
