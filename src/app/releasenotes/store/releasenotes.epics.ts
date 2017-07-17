import { Injectable } from '@angular/core';
import { ReleasenotesActions } from './releasenotes.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ReleasenotesComponent } from '../releasenotes/releasenotes.component';
import { MdDialog } from '@angular/material';
declare function require(moduleName: string): any;
const {version: appVersion} = require('../../../../package.json');

@Injectable()
export class ReleasenotesEpics {

  private version: string;
  @select(['releasenotes', 'seenVersion']) seenVersion$: Observable<string>;
  private seenVersion: string;

  constructor(private actions: ReleasenotesActions,
              private dialog: MdDialog) {
    this.version = appVersion;
    this.seenVersion$.subscribe(seenVersion => this.seenVersion = seenVersion);
  }

  createEpics() {
    return [
      action$ => action$
        .ofType(ReleasenotesActions.CHECK_VERSION)
        .map(() => {
          if (this.seenVersion !== 'new' && this.version !== this.seenVersion) {
            this.actions.showReleasenotes();
          }
          return this.actions.checkVersionSuccess(this.version);
        }),
      action$ => action$
        .ofType(ReleasenotesActions.SHOW_RELEASENOTES)
        .map(() => {
          this.dialog.open(ReleasenotesComponent);
          return this.actions.showReleasenotesSuccess(this.version);
        })
    ];
  }
}
