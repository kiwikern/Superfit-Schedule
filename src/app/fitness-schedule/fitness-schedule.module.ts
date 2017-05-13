import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { ClassListComponent } from './class-list/class-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderClassesPipe } from './pipes/order-classes.pipe';
import { FilterClassesPipe } from './pipes/filter-classes.pipe';
import { ScheduleEpics } from './store/schedule.epics';
import { ScheduleActions } from './store/schedule.actions';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SelectFilterComponent } from './filter/select-filter/select-filter.component';
import { MappingService } from './services/mapping.service';
import { FilterActions } from './store/filter.actions';
import { OrderDaysPipe } from './pipes/order-days.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SettingsActions } from './store/settings.actions';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { ScheduleParserService } from './services/schedule-parser.service';
import { TimeFilterComponent } from './filter/time-filter/time-filter.component';
import { FavoriteActions } from './store/favorite.actions';
import { FilteredScheduleComponent } from './filtered-schedule/filtered-schedule.component';

const fitnessRoutes: Routes = [
  {path: 'schedule', component: FilteredScheduleComponent},
  {path: 'favorites', component: FilteredScheduleComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(fitnessRoutes)
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent,
    ClassListComponent,
    OrderClassesPipe,
    FilterClassesPipe,
    FilterComponent,
    SelectFilterComponent,
    OrderDaysPipe,
    SettingsComponent,
    TimeFilterComponent,
    FilteredScheduleComponent
  ],
  exports: [
    ClassListComponent,
    FilterComponent
  ],
  providers: [
    ScheduleEpics,
    ScheduleActions,
    FilterActions,
    SettingsActions,
    MappingService,
    ScheduleParserService,
    FavoriteActions
  ]
})
export class FitnessScheduleModule {
}
