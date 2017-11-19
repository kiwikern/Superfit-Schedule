import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { RatingComponent } from './rating/rating.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Logger } from './logger.service';
import { ScrollService } from './scroll.service';
import { RepeatPipe } from './repeat.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  declarations: [
    RatingComponent,
    FabButtonComponent,
    RepeatPipe
  ],
  providers: [
    Logger,
    ScrollService
  ],
  exports: [
    RatingComponent,
    FabButtonComponent,
    RepeatPipe
  ]
})
export class SfsCommonModule { }
