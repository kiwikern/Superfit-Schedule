import { Injectable } from '@angular/core';
import { ReleasenotesActions } from './releasenotes.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ReleasenotesComponent } from '../releasenotes/releasenotes.component';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

declare function require(moduleName: string): any;

const {version: appVersion} = require('../../../../package.json');

@Injectable()
export class ReleasenotesEpics {

  public epics;
  private version: string;
  @select(['releasenotes', 'seenVersion']) seenVersion$: Observable<string>;
  private seenVersion: string = '';
  @select(['settings', 'hideReleasenotes']) hideReleasenotes$: Observable<boolean>;
  private hideReleasenotes: boolean;

  constructor(private actions: ReleasenotesActions,
              private dialog: MatDialog) {
    this.version = appVersion;
    this.seenVersion$.subscribe(seenVersion => this.seenVersion = seenVersion);
    this.hideReleasenotes$.subscribe(hideReleasenotes => this.hideReleasenotes = hideReleasenotes);

    const checkVersion = action$ => action$
      .pipe(
        ofType(ReleasenotesActions.CHECK_VERSION),
        map(() => {
          if (this.shouldShowReleasenotes()) {
            this.actions.showReleasenotes();
          }
          return this.actions.checkVersionSuccess(this.version);
        }));
    const showReleasenotes = action$ => action$
      .pipe(
        ofType(ReleasenotesActions.SHOW_RELEASENOTES),
        map(() => {
          this.dialog.open(ReleasenotesComponent);
          return this.actions.showReleasenotesSuccess(this.version);
        }));

    this.epics = combineEpics(checkVersion, showReleasenotes);
  }


  private shouldShowReleasenotes() {
    const isSameMinorVersion = this.isSameMinorVersion(this.version, this.seenVersion);
    const isFirstVisit = this.seenVersion === 'new';
    return !this.hideReleasenotes && !isFirstVisit && !isSameMinorVersion;
  }

  private isSameMinorVersion(version1: string, version2: string): boolean {
    if (typeof version1 !== 'string' || typeof version2 !== 'string') {
      return true;
    } else {
      const minor1 = this.getMinorVersion(version1);
      const minor2 = this.getMinorVersion(version2);
      return minor1 === minor2;
    }
  }

  private getMinorVersion(version: string) {
    return version.substr(0, version.lastIndexOf('.'));
  }
}
