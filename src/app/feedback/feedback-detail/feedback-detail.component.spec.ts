import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailComponent } from './feedback-detail.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackActions } from '../store/feedback.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedbackDetailComponent', () => {
  let component: FeedbackDetailComponent;
  let fixture: ComponentFixture<FeedbackDetailComponent>;

  beforeEach(async(() => {
    const actions = new FeedbackActions(null);
    spyOn(actions, 'markFeedbackRead');
    TestBed.configureTestingModule({
      declarations: [ FeedbackDetailComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: FeedbackActions, useValue: actions}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
