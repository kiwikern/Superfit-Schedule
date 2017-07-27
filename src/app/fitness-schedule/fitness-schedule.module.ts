import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SortClassesPipe } from './pipes/sort-classes.pipe';
import { FilterClassesPipe } from './pipes/filter-classes.pipe';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectFilterComponent } from './filter/select-filter/select-filter.component';
import { OrderDaysPipe } from './pipes/order-days.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { ScheduleParserService } from './store/schedule/schedule-parser.service';
import { TimeFilterComponent } from './filter/time-filter/time-filter.component';
import { FilteredScheduleComponent } from './filtered-schedule/filtered-schedule.component';
import { FavoritesScheduleComponent } from './favorites-schedule/favorites-schedule.component';
import { DayColumnComponent } from './day-column/day-column.component';
import { FitnessScheduleStoreModule } from './store/fitness-schedule-store.module';
import { ChangesComponent } from './changes/changes.component';
import { ScheduleRouterComponent } from './schedule-router/schedule-router.component';
import { DurationFilterComponent } from './filter/duration-filter/duration-filter.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SfsCommonModule } from '../common/common.module';
import { RepeatPipe } from './pipes/repeat.pipe';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HighlightService } from './services/highlight.service';
import { MdAutocompleteModule } from '@angular/material';

const fitnessRoutes: Routes = [
  {
    path: '', component: ScheduleRouterComponent, children: [
    {path: '', component: FilteredScheduleComponent},
    {path: 'favorites', component: FavoritesScheduleComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'changes', component: ChangesComponent}
  ]  },
  {path: 'class/:id', component: CommentListComponent},
  {path: 'class/:id/new', component: CommentFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(fitnessRoutes),
    FitnessScheduleStoreModule,
    SfsCommonModule,
    MdAutocompleteModule
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent,
    ScheduleComponent,
    FilterComponent,
    SelectFilterComponent,
    OrderDaysPipe,
    FilterClassesPipe,
    SortClassesPipe,
    SettingsComponent,
    TimeFilterComponent,
    FilteredScheduleComponent,
    FavoritesScheduleComponent,
    DayColumnComponent,
    ChangesComponent,
    ScheduleRouterComponent,
    DurationFilterComponent,
    CommentListComponent,
    RepeatPipe,
    CommentDetailComponent,
    CommentFormComponent
  ],
  exports: [
    ScheduleComponent,
    FilterComponent
  ],
  providers: [
    ScheduleParserService,
    HighlightService
  ]
})
export class FitnessScheduleModule {
}
