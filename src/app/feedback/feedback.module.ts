import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdRadioModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { RatingComponent } from './rating/rating.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

const feedbackRoutes: Routes = [
  {path: '', component: FeedbackListComponent},
  {path: 'new', component: FeedbackFormComponent},
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
    MdRadioModule,
    MdCardModule,
    MdListModule
  ],
  declarations: [
    FeedbackFormComponent,
    FeedbackListComponent,
    FeedbackDetailComponent,
    RatingComponent,
    FabButtonComponent
  ]
})
export class FeedbackModule {
}
