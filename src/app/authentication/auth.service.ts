import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
 import { User } from '../shared/models/user';


@Injectable()
export class AuthenticationService {
//   baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
  verifyPassword(email: string, password: string): Observable<User> {
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<User>(url, { email: email, password: password,returnSecureToken:true }, { headers: headers });
  }
  getToken() {
    return localStorage.getItem("corporation")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
//   forgotPassword(emailid: string): Observable<any> {
//     let url = this.baseUrl + '/corporations/forgot';
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.httpClient.post(url, { emailId: emailid }, { headers: headers });
//   }
//   resetPassword(password: string, id: string): Observable<any> {
//     let url = this.baseUrl + '/corporations/authentication/reset/' + id;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.httpClient.post(url, { password: password }, { headers: headers });
//   }
}

