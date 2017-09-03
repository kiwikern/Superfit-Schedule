import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDialogComponent } from './onboarding-dialog.component';

describe('OnboardingDialogComponent', () => {
  let component: OnboardingDialogComponent;
  let fixture: ComponentFixture<OnboardingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
