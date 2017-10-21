import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListComponent } from './feedback-list.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackActions } from '../store/feedback.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackListComponent', () => {
  let component: FeedbackListComponent;
  let fixture: ComponentFixture<FeedbackListComponent>;

  beforeEach(async(() => {
    const actions = new FeedbackActions(null);
    spyOn(actions, 'loadFeedback');
    TestBed.configureTestingModule({
      declarations: [ FeedbackListComponent ],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatListModule,
        RouterTestingModule
      ],
      providers: [
        {provide: FeedbackActions, useValue: actions}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
