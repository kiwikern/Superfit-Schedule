import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service/auth.service';
import { select } from '@angular-redux/store';

@Injectable()
export class AccountAuthGuard implements CanActivate {

  @select(['authentication', 'userId']) userId$: Observable<string>;
  isRegistered: boolean = false;

  constructor(private auth: AuthService,
              private router: Router) {
    this.userId$.subscribe(userId => this.isRegistered = userId && !userId.includes('_gen_'));
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      let targetRoute;
      if (this.isRegistered) {
        targetRoute = 'login';
      } else {
        targetRoute = 'registration';
      }
      this.router.navigate(['auth', targetRoute], {queryParams: next.queryParams});
      return false;
    }
  }
}
