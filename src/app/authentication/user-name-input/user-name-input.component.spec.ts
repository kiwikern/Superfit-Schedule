import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameInputComponent } from './user-name-input.component';
import { FormsModule } from '@angular/forms';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserNameInputComponent', () => {
  let component: UserNameInputComponent;
  let fixture: ComponentFixture<UserNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameInputComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
