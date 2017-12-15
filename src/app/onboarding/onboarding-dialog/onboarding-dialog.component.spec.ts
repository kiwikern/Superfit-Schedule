import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDialogComponent } from './onboarding-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { Component, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

describe('OnboardingDialogComponent', () => {
  let component: OnboardingDialogComponent;
  let fixture: ComponentFixture<OnboardingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OnboardingDialogComponent,
        MockLinkDotsComponent
      ],
      imports: [
        RouterTestingModule,
        SfsMaterialModule
      ],
      providers: [
        {provide: MatDialogRef, useClass: MockMatDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {steps: []}}
      ]
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

@Component({
  selector: 'sfs-link-dots',
  template: ''
})
class MockLinkDotsComponent {
  @Input() dotsCount;
  @Input() activeIndex;
}

class MockMatDialogRef {
  afterClosed() {
    return Observable.empty();
  }
}
