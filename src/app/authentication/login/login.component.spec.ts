import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { AuthenticationActions } from '../store/authentication.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserNameInputComponent } from '../user-name-input/user-name-input.component';
import { MailAddressInputComponent } from '../mail-address-input/mail-address-input.component';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        UserNameInputComponent,
        MailAddressInputComponent,
        PasswordInputComponent
      ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgReduxTestingModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: AuthenticationActions, useClass: MockAuthActions}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

class MockAuthActions {
  logout() {
  }
}
