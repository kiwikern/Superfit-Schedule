import { inject, TestBed } from '@angular/core/testing';

import { AccountAuthGuard } from './account-auth.guard';
import { AuthService } from '../auth-service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        AccountAuthGuard,
        {provide: AuthService, useClass: MockAuthService},
      ]
    });

    it('should ...', inject([AccountAuthGuard], (guard: AccountAuthGuard) => {
      expect(guard).toBeTruthy();
    }));
  });
});

class MockAuthService {
  isLoggedIn() {
    return true;
  }
}
