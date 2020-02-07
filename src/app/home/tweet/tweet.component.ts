import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/shared/models/tweet';
import { Error } from 'src/app/shared/models/error';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  public form: FormGroup;
  tweets: Array<Tweet>;
  errors: Error;
  tweet: Tweet

  constructor(private fb: FormBuilder, private HomeService: HomeService, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getTweets()
      .subscribe(
        data => {
          this.tweets = data;

        },
        error => {
          this.errors = error.error;

        }
      );

  }
  goToTweetDetails(tweet: Tweet) {
    this.tweet = tweet
  }

}

