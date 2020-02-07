import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable()
export class AuthenticationService {
  private _authenticated = false;

  constructor(private httpClient: HttpClient) { }

  verifyPassword(email: string, password: string): Observable<User> {
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>(url,
      { email: email, password: password, returnSecureToken: true }, { headers: headers, params: { key: 'AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g' } });
  }

  getToken() {
    return localStorage.getItem("token")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }
}

