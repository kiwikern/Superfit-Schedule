import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePeriodComponent } from './time-period/time-period.component';
import { FitnessClassComponent } from './main/fitness-class.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TimePeriodComponent,
    FitnessClassComponent
  ],
  exports: [
    FitnessClassComponent
  ]
})
export class FitnessClassModule { }
