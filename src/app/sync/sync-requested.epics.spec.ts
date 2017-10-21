import { inject, TestBed } from '@angular/core/testing';
import { Http, HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/toArray';
import { SyncActivatedEpics } from './sync-activated.epics';
import { AuthHttp, AuthModule } from 'angular2-jwt';
import { SyncActions } from './sync.actions';
import { MatSnackBar } from '@angular/material';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { SyncRequestedEpics } from './sync-requested.epics';
import { Angulartics2 } from 'angulartics2';
import { Router } from '@angular/router';

describe('SyncRequestedEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AuthModule
      ],
      providers: [
        SyncRequestedEpics,
        SyncActions,
        AuthenticationActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MatSnackBar, useClass: SnackBarMock},
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AuthHttp, useExisting: Http},
        {provide: Router, useClass: RouterMock}
      ]
    });
  });

  let action$;
  beforeEach(() => {
    inject([SyncActions], (actions: SyncActions) => {
      action$ = ActionsObservable.of(actions.sync());
    })();
  });

  it('should sync successfully', (done) => {
    inject([SyncRequestedEpics, XHRBackend],
      (epics: SyncActivatedEpics, mockBackend: MockBackend) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_SUCCESS, payload: {lastUpdate: 1}},
        ];
        mockBackendResponse(mockBackend, {lastUpdate: 1});
        performAction(epics, expectedOutputActions, done);
      })();
  });

  it('should not sync and logout when unauthenticated', (done) => {
    inject([SyncRequestedEpics, XHRBackend, MatSnackBar],
      (epics: SyncActivatedEpics, mockBackend: MockBackend, snack: SnackBarMock) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_FAILED},
          {type: AuthenticationActions.LOGOUT}
        ];
        mockBackendError(mockBackend, 401);
        performAction(epics, expectedOutputActions, done, snack, 'ausgeloggt');
      })();
  });

  it('should not sync on error', (done) => {
    inject([SyncRequestedEpics, XHRBackend],
      (epics: SyncActivatedEpics, mockBackend: MockBackend) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_FAILED},
          {type: SyncActions.SYNC_ACTIVATE_REQUEST}
        ];
        mockBackendError(mockBackend, 409);
        performAction(epics, expectedOutputActions, done);
      })();
  });


  function performAction(epics, expectedOutputActions, done, snack?, message?) {
    epics.createEpics()(action$)
      .toArray()
      .subscribe(outputActions => {
        expect(outputActions).toEqual(expectedOutputActions);
        if (snack) {
          expect(snack.message).toContain(message);
        }
        done();
      });
  }

  function mockBackendResponse(mockBackend: MockBackend, body: Object) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body})));
    });
  }

  function mockBackendError(mockBackend: MockBackend, status: number) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockError(new MockError(new ResponseOptions({status})));
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
      return this;
    }

    onAction() {
      return this;
    }

    subscribe() {
    }

  }

  class RouterMock {
    navigate(route) {
    }
  }

});
