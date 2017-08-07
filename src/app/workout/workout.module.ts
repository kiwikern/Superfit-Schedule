import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MappingService } from './mapping.service';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimePeriodComponent } from './fitness-class/time-period/time-period.component';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FitnessClassComponent,
    TimePeriodComponent
  ],
  providers: [
    MappingService
  ],
  exports: [
    FitnessClassComponent
  ]
})
export class WorkoutModule { }
