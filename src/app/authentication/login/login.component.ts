import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Error } from 'src/app/shared/models/error';
import { LogIn, LogInSuccess } from 'src/app/state/actions/auth.actions';
import { State } from 'src/app/state/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  user: User;
  errors: Error;
  isInvalid: boolean = false;

  constructor(private fb: FormBuilder, private AuthService: AuthenticationService, private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.AuthService.verifyPassword(this.form.value.uname, this.form.value.password)
      .subscribe(
        data => {
          if (data.registered === true) {
            this.user = data
            localStorage.clear();
            localStorage.setItem('token', this.user.idToken)
            this.store.dispatch({ type: 'LOGIN_SUCCESS', payload: this.user });
            this.router.navigate(['/tweets']);
          }
        },
        error => {
          this.errors = error.error;
          this.isInvalid = true
          this.store.dispatch({ type: 'LOGIN_FAILURE' });
        }
      );
  }
}
