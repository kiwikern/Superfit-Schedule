import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserNameInputComponent } from '../user-name-input/user-name-input.component';
import { MailAddressInputComponent } from '../mail-address-input/mail-address-input.component';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordConfirmationInputComponent } from '../password-confirmation-input/password-confirmation-input.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { AuthenticationActions } from '../store/authentication.actions';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent,
        UserNameInputComponent,
        MailAddressInputComponent,
        PasswordInputComponent,
        PasswordConfirmationInputComponent
      ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        NgReduxTestingModule
      ],
      providers: [
        {provide: AuthenticationActions, useClass: MockAuthActions}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
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
