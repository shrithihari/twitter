import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetLayoutComponent } from './core/tweet-layout/tweet-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren:
      './authentication/auth.module#AuthenticationModule'

  },
  {
    path: 'tweets',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
