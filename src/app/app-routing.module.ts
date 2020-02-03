import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetLayoutComponent } from './core/tweet-layout/tweet-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: TweetLayoutComponent,
    // children: [
    //   {
    //     path: 'analysis',
    //     loadChildren: './analysis/analysis.module#AnalysisModule',
    //   },
    //   {
    //     path: 'termsandconditions',
    //     loadChildren: './termsandconditions/termsandconditions.module#TermsAndConditionsModule'
    //   },
    //   {
    //     path: 'privacypolicy',
    //     loadChildren: './privacypolicy/privacypolicy.module#PrivacyPolicyModule',
    //   },
    //   {
    //     path: 'support',
    //     loadChildren:
    //       './support/support.module#SupportModule'
    //   },
    //   {
    //     path: 'settings',
    //     loadChildren:
    //       './settings/settings.module#SettingsModule'
    //   },
    //   {
    //     path: 'account',
    //     loadChildren:
    //       './account/account.module#AccountModule'
    //   },
    //   {
    //     path: '',
    //     loadChildren: './dashboard/dashboard.module#DashboardModule',
    //   },
    // ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren:
          './authentication/auth.module#AuthenticationModule'
      },
      // {
      //   path: 'error',
      //   loadChildren: './error/error.module#ErrorModule'
      // },
    ],
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
