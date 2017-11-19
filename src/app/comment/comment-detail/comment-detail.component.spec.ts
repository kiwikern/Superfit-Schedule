import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailComponent } from './comment-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RepeatPipe } from '../../common/repeat.pipe';
import { HighlightService } from '../highlight.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommentDetailComponent', () => {
  let component: CommentDetailComponent;
  let fixture: ComponentFixture<CommentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentDetailComponent,
        RepeatPipe
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        HighlightService
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailComponent);
    component = fixture.componentInstance;
    component.comment = {
      workoutId: '',
      highlights: [],
      userName: '',
      date: new Date(),
      text: '',
      userId: '',
      instructors: [],
      attendance: 2
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
