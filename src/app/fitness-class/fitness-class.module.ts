import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MaterialModule } from '@angular/material';
import { ClassListComponent } from './class-list/class-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderClassesPipe } from './order-classes/order-classes.pipe';
import { FilterClassesPipe } from './filter-classes/filter-classes.pipe';
import { ScheduleEpics } from './store/schedule.epics';
import { ScheduleActions } from './store/schedule.actions';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent,
    ClassListComponent,
    OrderClassesPipe,
    FilterClassesPipe
  ],
  exports: [
    ClassListComponent
  ],
  providers: [
    ScheduleEpics,
    ScheduleActions
  ]
})
export class FitnessClassModule {
}
