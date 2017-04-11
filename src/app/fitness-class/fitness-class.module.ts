import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MaterialModule } from '@angular/material';
import { ClassListComponent } from './class-list/class-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderClassesPipe } from './order-classes/order-classes.pipe';

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
    OrderClassesPipe
  ],
  exports: [
    ClassListComponent
  ]
})
export class FitnessClassModule {
}
