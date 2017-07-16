import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { AuthenticationActions } from '../store/authentication.actions';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordConfirmationInputComponent } from '../password-confirmation-input/password-confirmation-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangePasswordComponent,
        PasswordInputComponent,
        PasswordConfirmationInputComponent
      ],
      imports: [
        RouterTestingModule,
        SfsMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: AuthenticationActions, useClass: MockAuthActions}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
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
