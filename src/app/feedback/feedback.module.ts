import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdRadioModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';

const feedbackRoutes: Routes = [
  {path: '', component: FeedbackListComponent},
  {path: ':id', component: FeedbackDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(feedbackRoutes),
    FlexLayoutModule,
    FormsModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdDialogModule,
    MdRadioModule,
    MdCardModule,
    MdListModule
  ],
  declarations: [
    FeedbackFormComponent,
    FeedbackListComponent,
    FeedbackDetailComponent
  ],
  entryComponents: [
    FeedbackFormComponent
  ]
})
export class FeedbackModule {
}
