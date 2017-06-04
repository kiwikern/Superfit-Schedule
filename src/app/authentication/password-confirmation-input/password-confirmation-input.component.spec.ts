import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmationInputComponent } from './password-confirmation-input.component';
import { FormsModule } from '@angular/forms';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PasswordConfirmationInputComponent', () => {
  let component: PasswordConfirmationInputComponent;
  let fixture: ComponentFixture<PasswordConfirmationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordConfirmationInputComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        NoopAnimationsModule
      ]
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
