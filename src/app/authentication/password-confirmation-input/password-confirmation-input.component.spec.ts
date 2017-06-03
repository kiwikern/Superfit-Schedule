import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmationInputComponent } from './password-confirmation-input.component';

describe('PasswordConfirmationInputComponent', () => {
  let component: PasswordConfirmationInputComponent;
  let fixture: ComponentFixture<PasswordConfirmationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordConfirmationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordConfirmationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
