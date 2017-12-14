import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { TimeFilterComponent } from './time-filter/time-filter.component';
import { DurationFilterComponent } from './duration-filter/duration-filter.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SfsMaterialModule } from '../material/sfs-material.module';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  declarations: [
    FilterComponent,
    SelectFilterComponent,
    TimeFilterComponent,
    DurationFilterComponent,
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
