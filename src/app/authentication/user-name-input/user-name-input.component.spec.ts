import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameInputComponent } from './user-name-input.component';

describe('UserNameInputComponent', () => {
  let component: UserNameInputComponent;
  let fixture: ComponentFixture<UserNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameInputComponent ]
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
