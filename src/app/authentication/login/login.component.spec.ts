import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { AuthenticationActions } from '../store/authentication.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserNameInputComponent } from '../user-name-input/user-name-input.component';
import { MailAddressInputComponent } from '../mail-address-input/mail-address-input.component';
import { PasswordInputComponent } from '../password-input/password-input.component';

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
        NgReduxTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        AuthenticationActions
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
