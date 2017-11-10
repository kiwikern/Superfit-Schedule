import { inject, TestBed } from '@angular/core/testing';
import { ActionsObservable } from 'redux-observable';
import { SyncActivatedEpics } from './sync-activated.epics';
import { SyncActions } from './sync.actions';
import { FavoriteActions } from '../fitness-schedule/store/favorites/favorite.actions';
import { SettingsActions } from '../fitness-schedule/store/settings/settings.actions';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { MockNgRedux } from '@angular-redux/store/lib/testing';
import { MatSnackBar } from '@angular/material';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { Angulartics2 } from 'angulartics2';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { toArray } from 'rxjs/operators';

describe('SyncActivatedEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SyncActivatedEpics,
        SyncActions,
        FavoriteActions,
        SettingsActions,
        FilterActions,
        AuthenticationActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MatSnackBar, useClass: SnackBarMock},
        {provide: Router, useClass: RouterMock}
      ]
    });
  });

  beforeEach(() => {
    MockNgRedux.reset();
    const lastUpdateStub = MockNgRedux.getSelectorStub(['sync', 'lastUpdate']);
    lastUpdateStub.next(1);
    lastUpdateStub.complete();
  });

  it('should activate sync and store received state when lastUpdate differs', (done) => {
    inject([SyncActivatedEpics, SyncActions],
      (epics: SyncActivatedEpics, actions: SyncActions) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 2, userId: 'id'}},
          {type: FilterActions.FILTER_SET, payload: 'filter'},
          {type: FavoriteActions.FAVORITE_SET, payload: 'favorites'},
          {type: SettingsActions.SETTING_SET, payload: 'settings'}
        ];
        performAction(epics, action$, expectedOutputActions, done);
        mockBackendResponse({
          lastUpdate: 2,
          userid: 'id',
          state: {
            filter: 'filter',
            favorites: 'favorites',
            settings: 'settings'
          }
        });
      })();
  });

  it('should activate sync and skip received state when lastUpdate is equal', (done) => {
    inject([SyncActivatedEpics, SyncActions],
      (epics: SyncActivatedEpics, actions: SyncActions) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 1, userId: 'id'}}
        ];
        performAction(epics, action$, expectedOutputActions, done);
        mockBackendResponse({
          lastUpdate: 1,
          userid: 'id',
          state: {
            filter: 'filter',
            favorites: 'favorites',
            settings: 'settings'
          }
        });
      })();
  });

  it('should not activate sync on error', (done) => {
    inject([SyncActivatedEpics, SyncActions],
      (epics: SyncActivatedEpics, actions: SyncActions) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_FAILED}
        ];
        performAction(epics, action$, expectedOutputActions, done);
        mockBackendError({});
      })();
  });


  function performAction(epics, action$, expectedOutputActions, done) {
    epics.createEpics()(action$)
      .pipe(toArray()
      ).subscribe(outputActions => {
      expect(outputActions).toEqual(expectedOutputActions);
      done();
    });
  }

  function mockBackendResponse(body: Object) {
    const http = TestBed.get(HttpTestingController);
    http.expectOne('/api/sfs/sync').flush(body);
  }

  function mockBackendError(body: Object) {
    const http = TestBed.get(HttpTestingController);
    http.expectOne('/api/sfs/sync').error(body);
  }

  class SnackBarMock {
    message: string;

    open(message, action, options) {
      this.message = message;
    }
  }

  class RouterMock {
    navigate(route) {
    }
  }

});
