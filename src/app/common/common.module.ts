import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { RatingComponent } from './rating/rating.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Logger } from './logger.service';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdIconModule,
    FlexLayoutModule
  ],
  declarations: [
    RatingComponent,
    FabButtonComponent
  ],
  providers: [
    Logger
  ],
  exports: [
    RatingComponent,
    FabButtonComponent
  ]
})
export class SfsCommonModule { }
