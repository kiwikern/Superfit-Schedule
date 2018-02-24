import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  @select(['authentication', 'jwt']) private jwt$: Observable<string>;
  private jwt: string;

  constructor() {
    this.jwt$.subscribe(jwt => this.jwt = jwt);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwt) {
      req = req.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${this.jwt}`
          }
        });
    }
    return next.handle(req);
  }
}
