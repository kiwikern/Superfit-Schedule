import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MaterialModule } from '@angular/material';
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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent,
    ClassListComponent,
    OrderClassesPipe,
    FilterClassesPipe,
    FilterComponent,
    SelectFilterComponent,
    OrderDaysPipe
  ],
  exports: [
    ClassListComponent,
    FilterComponent
  ],
  providers: [
    ScheduleEpics,
    ScheduleActions,
    FilterActions,
    MappingService
  ]
})
export class FitnessClassModule {
}
