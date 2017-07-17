import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasenotesActions } from './releasenotes.actions';
import { ReleasenotesEpics } from './releasenotes.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ReleasenotesActions,
    ReleasenotesEpics
  ]
})
export class ReleasenotesStoreModule { }
