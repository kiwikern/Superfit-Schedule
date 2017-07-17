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
    this.angulartics.setUserProperties.next({dimension1: version});
    return {
      type: ReleasenotesActions.CHECK_VERSION_SUCCESS,
      payload: version
    };
  }

  @dispatch()
  showReleasenotes() {
    return {
      type: ReleasenotesActions.SHOW_RELEASENOTES
    };
  }

  showReleasenotesSuccess(version: string) {
    this.angulartics.eventTrack.next({action: 'showReleasenotes', properties: {category: version}});
    return {
      type: ReleasenotesActions.SHOW_RELEASENOTES_SUCCESS,
      payload: version
    };
  }
}
