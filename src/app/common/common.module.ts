import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RatingComponent } from './rating/rating.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Logger } from './logger.service';
import { ScrollService } from './scroll.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [
    RatingComponent,
    FabButtonComponent
  ],
  providers: [
    Logger,
    ScrollService
  ],
  exports: [
    RatingComponent,
    FabButtonComponent
  ]
})
export class SfsCommonModule { }
