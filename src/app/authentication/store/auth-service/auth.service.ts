import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {

  @select(['authentication', 'jwt']) jwtToken$: Observable<string>;
  token: string;

  constructor() {
    this.jwtToken$.subscribe(token => this.token = token);
  }

  isLoggedIn() {
    try {
      const decoded = jwtDecode(this.token);
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }

}
