import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class ReleasenotesActions {
  static readonly CHECK_VERSION = 'CHECK_VERSION';
  static readonly CHECK_VERSION_SUCCESS = 'CHECK_VERSION_SUCCESS';
  static readonly SHOW_RELEASENOTES = 'SHOW_RELEASENOTES';
  static readonly SHOW_RELEASENOTES_SUCCESS = 'SHOW_RELEASENOTES_SUCCESS';

  constructor(private angulartics: Angulartics2) {
  }

  checkVersion() {
    return {
      type: ReleasenotesActions.CHECK_VERSION
    };
  }

  checkVersionSuccess(version: string) {
    return {
      type: ReleasenotesActions.CHECK_VERSION_SUCCESS,
      payload: version
    };
  }

  @dispatch()
  showReleasenotes() {
    this.angulartics.eventTrack.next({action: 'showReleasenotes', properties: {}});
    return {
      type: ReleasenotesActions.SHOW_RELEASENOTES
    };
  }

  showReleasenotesSuccess(version: string) {
    return {
      type: ReleasenotesActions.SHOW_RELEASENOTES_SUCCESS,
      payload: version
    };
  }
}
