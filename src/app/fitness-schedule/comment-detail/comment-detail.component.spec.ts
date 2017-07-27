import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailComponent } from './comment-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommentDetailComponent', () => {
  let component: CommentDetailComponent;
  let fixture: ComponentFixture<CommentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
