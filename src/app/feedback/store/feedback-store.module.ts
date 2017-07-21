import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackActions } from './feedback.actions';
import { FeedbackEpics } from './feedback.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FeedbackActions,
    FeedbackEpics
  ]
})
export class FeedbackStoreModule { }
