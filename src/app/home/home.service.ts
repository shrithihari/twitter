import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tweet } from '../shared/models/tweet';



@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    let url = "https://angular-sample-twitter.firebaseio.com/tweets.json";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<Tweet[]>(url,
      { headers: headers });

  }
}

