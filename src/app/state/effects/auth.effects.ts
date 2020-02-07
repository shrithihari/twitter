import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';


import { AuthenticationService } from '../../authentication/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        map((result: any) => {
            return new LogInSuccess(result);
        }),
    );
}

