import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListComponent } from './feedback-list.component';
import { MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdListModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackActions } from '../store/feedback.actions';

describe('FeedbackListComponent', () => {
  let component: FeedbackListComponent;
  let fixture: ComponentFixture<FeedbackListComponent>;

  beforeEach(async(() => {
    const actions = new FeedbackActions(null);
    spyOn(actions, 'loadFeedback');
    TestBed.configureTestingModule({
      declarations: [ FeedbackListComponent ],
      imports: [
        MdIconModule,
        MdButtonModule,
        MdDialogModule,
        MdCardModule,
        MdListModule,
        RouterTestingModule
      ],
      providers: [
        {provide: FeedbackActions, useValue: actions}
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
