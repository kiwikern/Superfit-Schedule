import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/toArray';
import { SyncActivatedEpics } from './sync-activated.epics';
import { AuthHttp, AuthModule } from 'angular2-jwt';
import { SyncActions } from './sync.actions';
import { FavoriteActions } from '../fitness-schedule/store/favorites/favorite.actions';
import { settings } from 'cluster';
import { SettingsActions } from '../fitness-schedule/store/settings/settings.actions';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { MockNgRedux } from '@angular-redux/store/lib/testing';
describe('SyncActivatedEpics', () => {

  beforeEach(() => {
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
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AuthHttp, useExisting: Http}
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
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 2}},
          {type: FilterActions.FILTER_SET, payload: 'filter'},
          {type: FavoriteActions.FAVORITE_SET, payload: 'favorites'},
          {type: SettingsActions.SETTING_SET, payload: 'settings'}
        ];
        mockBackendResponse(mockBackend, {
          lastUpdate: 2,
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
          {type: SyncActions.SYNC_ACTIVATE_SUCCESS, payload: {lastUpdate: 1}}
        ];
        mockBackendResponse(mockBackend, {
          lastUpdate: 1,
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

});
