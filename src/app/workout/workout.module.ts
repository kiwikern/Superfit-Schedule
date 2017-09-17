import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessClassComponent } from './fitness-class/fitness-class.component';
import { MappingService } from './mapping.service';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { TimePeriodComponent } from './fitness-class/time-period/time-period.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    RouterModule
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
