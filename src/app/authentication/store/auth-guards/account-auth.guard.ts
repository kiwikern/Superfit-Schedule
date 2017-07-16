import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class AccountAuthGuard implements CanActivate {

  constructor(private auth: AuthService,
  private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }
}
