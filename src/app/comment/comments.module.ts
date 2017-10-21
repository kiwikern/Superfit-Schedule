import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HighlightService } from './highlight.service';
import { MatAutocompleteModule } from '@angular/material';
import { HighlightsComponent } from './highlights/highlights.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SfsCommonModule } from '../common/common.module';
import { RepeatPipe } from './repeat.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightsSelectionComponent } from './highlights-selection/highlights-selection.component';
import { WorkoutModule } from '../workout/workout.module';

const commentsRoutes: Routes = [
  {path: ':id', component: CommentListComponent},
  {path: ':id/new', component: CommentFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commentsRoutes),
    SfsCommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    WorkoutModule,
    SfsMaterialModule,
    MatAutocompleteModule
  ],
  declarations: [
    CommentListComponent,
    CommentDetailComponent,
    CommentFormComponent,
    HighlightsComponent,
    RepeatPipe,
    HighlightsSelectionComponent
  ],
  providers: [
    HighlightService
  ]
})
export class CommentsModule { }
