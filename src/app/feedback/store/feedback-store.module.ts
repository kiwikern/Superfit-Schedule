import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackActions } from './feedback.actions';
import { FeedbackEpics } from './feedback.epics';
import { FeedbackService } from './feedback.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FeedbackActions,
    FeedbackEpics,
    FeedbackService
  ]
})
export class FeedbackStoreModule { }
