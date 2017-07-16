import { TestBed, async, inject } from '@angular/core/testing';
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
        AuthService,
      ]
    });
  });

  it('should ...', inject([LoginAuthGuard], (guard: LoginAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
