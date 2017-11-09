import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        JwtHelperService
      ],
      imports: [
        JwtModule.forRoot({config: {tokenGetter: () => ''}})
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
