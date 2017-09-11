import { inject, TestBed } from '@angular/core/testing';
import { Http, HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/toArray';
import { SyncActivatedEpics } from './sync-activated.epics';
import { AuthHttp, AuthModule } from 'angular2-jwt';
import { SyncActions } from './sync.actions';
import { FavoriteActions } from '../fitness-schedule/store/favorites/favorite.actions';
import { SettingsActions } from '../fitness-schedule/store/settings/settings.actions';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { MockNgRedux } from '@angular-redux/store/lib/testing';
import { MdSnackBar } from '@angular/material';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { Angulartics2 } from 'angulartics2';
import { Router } from '@angular/router';
describe('SyncActivatedEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AuthModule
      ],
      providers: [
        SyncActivatedEpics,
        SyncActions,
        FavoriteActions,
        SettingsActions,
        FilterActions,
        AuthenticationActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MdSnackBar, useClass: SnackBarMock},
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AuthHttp, useExisting: Http},
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
    inject([SyncActivatedEpics, SyncActions, XHRBackend],
      (epics: SyncActivatedEpics, actions: SyncActions, mockBackend: MockBackend) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 2, userId: 'id'}},
          {type: FilterActions.FILTER_SET, payload: 'filter'},
          {type: FavoriteActions.FAVORITE_SET, payload: 'favorites'},
          {type: SettingsActions.SETTING_SET, payload: 'settings'}
        ];
        mockBackendResponse(mockBackend, {
          lastUpdate: 2,
          userid: 'id',
          state: {
            filter: 'filter',
            favorites: 'favorites',
            settings: 'settings'
          }
        });
        performAction(epics, action$, expectedOutputActions, done);
      })();
  });

  it('should activate sync and skip received state when lastUpdate is equal', (done) => {
    inject([SyncActivatedEpics, SyncActions, XHRBackend],
      (epics: SyncActivatedEpics, actions: SyncActions, mockBackend: MockBackend) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 1, userId: 'id'}}
        ];
        mockBackendResponse(mockBackend, {
          lastUpdate: 1,
          userid: 'id',
          state: {
            filter: 'filter',
            favorites: 'favorites',
            settings: 'settings'
          }
        });
        performAction(epics, action$, expectedOutputActions, done);
      })();
  });

  it('should not activate sync on error', (done) => {
    inject([SyncActivatedEpics, SyncActions, XHRBackend],
      (epics: SyncActivatedEpics, actions: SyncActions, mockBackend: MockBackend) => {
        const action$ = ActionsObservable.of(actions.activateSync());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_FAILED}
        ];
        mockBackendError(mockBackend, {});
        performAction(epics, action$, expectedOutputActions, done);
      })();
  });


  function performAction(epics, action$, expectedOutputActions, done) {
    epics.createEpics()(action$)
      .toArray()
      .subscribe(outputActions => {
        expect(outputActions).toEqual(expectedOutputActions);
        done();
      });
  }

  function mockBackendResponse(mockBackend: MockBackend, body: Object) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body})));
    });
  }

  function mockBackendError(mockBackend: MockBackend, body: Object) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockError(new MockError(new ResponseOptions({body})));
    });
  }

  class MockError extends Response implements Error {
    name: any;
    message: any;
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
