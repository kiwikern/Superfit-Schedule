import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HighlightService } from './highlight.service';
import { MdAutocompleteModule } from '@angular/material';
import { HighlightsComponent } from './highlights/highlights.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SfsCommonModule } from '../common/common.module';
import { RepeatPipe } from './repeat.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FitnessScheduleModule } from '../fitness-schedule/fitness-schedule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightsSelectionComponent } from './highlights-selection/highlights-selection.component';

const commentRoutes: Routes = [
  {path: ':id', component: CommentListComponent},
  {path: ':id/new', component: CommentFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commentRoutes),
    SfsCommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FitnessScheduleModule,
    SfsMaterialModule,
    MdAutocompleteModule
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
export class CommentModule { }
