import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  @select(['authentication', 'jwt']) jwtToken$: Observable<string>;
  jwtHelper: JwtHelper = new JwtHelper();
  token: string;

  constructor() {
    this.jwtToken$.subscribe(token => this.token = token);
  }

  isLoggedIn() {
    try {
      const decoded = this.jwtHelper.decodeToken(this.token);
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }

}
