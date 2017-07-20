import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormComponent } from './feedback-form.component';
import {
  MdButtonModule, MdDialogModule, MdDialogRef, MdIconModule, MdInputModule,
  MdRadioModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedbackFormComponent', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormComponent ],
      imports: [
        NoopAnimationsModule,
        MdInputModule,
        MdIconModule,
        MdButtonModule,
        MdDialogModule,
        MdRadioModule,
        FormsModule
      ],
      providers: [
        {provide: MdDialogRef, useValue: ''}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
