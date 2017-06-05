import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAddressInputComponent } from './mail-address-input.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MailAddressInputComponent', () => {
  let component: MailAddressInputComponent;
  let fixture: ComponentFixture<MailAddressInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailAddressInputComponent ],
      imports: [
        SfsMaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ]
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
