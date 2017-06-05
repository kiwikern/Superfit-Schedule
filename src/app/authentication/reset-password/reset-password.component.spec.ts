import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MailAddressInputComponent } from '../mail-address-input/mail-address-input.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResetPasswordComponent,
        CaptchaMockComponent,
        MailAddressInputComponent
      ],
      imports: [
        SfsMaterialModule,
        NoopAnimationsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  /* tslint:disable-next-line */
  selector: 're-captcha',
  template: ''
})
class CaptchaMockComponent {

}
