import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MaterialModule } from '@angular/material';
import { ClassListComponent } from './class-list/class-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent,
    ClassListComponent
  ],
  exports: [
    ClassListComponent
  ]
})
export class FitnessClassModule { }
