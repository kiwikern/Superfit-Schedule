import { TestBed, async, inject } from '@angular/core/testing';

import { AccountAuthGuard } from './account-auth.guard';
import { AuthService } from '../auth-service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AccountAuthGuard,
        AuthService,
      ]
    });
  });

  it('should ...', inject([AccountAuthGuard], (guard: AccountAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
