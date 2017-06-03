import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAddressInputComponent } from './mail-address-input.component';

describe('MailAddressInputComponent', () => {
  let component: MailAddressInputComponent;
  let fixture: ComponentFixture<MailAddressInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailAddressInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAddressInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
