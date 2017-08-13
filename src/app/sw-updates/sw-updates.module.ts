import { NgModule } from '@angular/core';
import { MdSnackBarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SwUpdatesService } from './sw-updates.service';
import { SfsCommonModule } from '../common/common.module';


@NgModule({
  imports: [
    SfsCommonModule,
    MdSnackBarModule,
    ServiceWorkerModule
  ],
  providers: [
    SwUpdatesService
  ]
})
export class SwUpdatesModule {}
