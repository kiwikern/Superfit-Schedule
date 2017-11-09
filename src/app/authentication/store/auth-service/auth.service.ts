import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  @select(['authentication', 'jwt']) jwtToken$: Observable<string>;
  token: string;

  constructor(private jwtHelper: JwtHelperService) {
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
