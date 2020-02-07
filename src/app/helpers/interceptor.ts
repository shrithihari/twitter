import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpParams } from "@angular/common/http";
import { AuthenticationService } from '../authentication/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.states';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private store: Store<AppState>) {
    };
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!(req.url.startsWith("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword"))) {
            if (this.authService.isLoggednIn) {
                let token = this.authService.getToken()
                let params: URLSearchParams = new URLSearchParams();
                params.set('auth', token);
                const request = req.clone({
                    url: req.url + '?' + params,
                });
                req = request;
            }
        }
        return next.handle(req);
    }
}

