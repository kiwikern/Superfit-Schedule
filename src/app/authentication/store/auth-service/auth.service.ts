import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as jwtDecode from 'jwt-decode';
import { Logger } from '../../../common/logger.service';

@Injectable()
export class AuthService {

  @select(['authentication', 'jwt']) jwtToken$: Observable<string>;
  token: string;

  constructor(private log: Logger) {
    this.jwtToken$.subscribe(token => this.token = token);
  }

  isLoggedIn() {
    if (!this.token) {
      return false;
    }
    try {
      const decoded = jwtDecode(this.token);
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      this.log.warn('Could not decode jwt.',{token: this.token}, error);
      return false;
    }
  }

  isAdmin() {
    if (!this.token) {
      return false;
    }
    try {
      const decoded = jwtDecode(this.token);
      return !!decoded.subject && decoded.subject.role === 'ADMIN';
    } catch (error) {
      this.log.warn('Could not decode jwt.', {token: this.token}, error);
      return false;
    }
  }

}
