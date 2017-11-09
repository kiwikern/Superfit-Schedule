import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginAuthGuard } from './login-auth.guard';
import { AuthService } from '../auth-service/auth.service';

describe('LoginAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        LoginAuthGuard,
        {provide: AuthService, useClass: MockAuthService}
      ]
    });
  });

  it('should ...', inject([LoginAuthGuard], (guard: LoginAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

class MockAuthService {
  isLoggedIn() {
    return true;
  }
}
