import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();

  isLoggedIn() {
    try {
      const token = JSON.parse(localStorage.getItem('sfs.state')).authentication.jwt;
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }

}
