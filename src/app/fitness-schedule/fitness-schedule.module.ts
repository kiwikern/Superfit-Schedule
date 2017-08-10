import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from '../workout/fitness-class/time-period/time-period.component';
import { FitnessClassComponent } from '../workout/fitness-class/fitness-class.component';
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
import { WorkoutModule } from '../workout/workout.module';

const fitnessRoutes: Routes = [
  {
    path: '', component: ScheduleRouterComponent, children: [
    {path: '', component: FilteredScheduleComponent},
    {path: 'favorites', component: FavoritesScheduleComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'changes', component: ChangesComponent}
  ]
  },
  {path: 'class', loadChildren: '../comment/comments.module#CommentsModule'},
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
    WorkoutModule
  ],
  declarations: [
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
    DurationFilterComponent
  ],
  exports: [
    ScheduleComponent,
    FilterComponent
  ],
  providers: [
    ScheduleParserService
  ]
})
export class FitnessScheduleModule {
}
