import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SwUpdatesService } from './sw-updates.service';
import { SfsCommonModule } from '../common/common.module';


@NgModule({
  imports: [
    SfsCommonModule,
    MatSnackBarModule,
    ServiceWorkerModule
  ],
  providers: [
    SwUpdatesService
  ]
})
export class SwUpdatesModule {}
