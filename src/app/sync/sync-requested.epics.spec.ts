import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/toArray';
import { SyncActivatedEpics } from './sync-activated.epics';
import { AuthHttp, AuthModule } from 'angular2-jwt';
import { SyncActions } from './sync.actions';
import { MdSnackBar } from '@angular/material';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { SyncRequestedEpics } from './sync-requested.epics';
describe('SyncRequestedEpics', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AuthModule
      ],
      providers: [
        SyncRequestedEpics,
        SyncActions,
        AuthenticationActions,
        {provide: MdSnackBar, useClass: SnackBarMock},
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AuthHttp, useExisting: Http}
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
          {type: SyncActions.SYNC_SUCCESS},
        ];
        mockBackendResponse(mockBackend, {});
        performAction(epics, expectedOutputActions, done);
      })();
  });

  it('should not sync and logout when unauthenticated', (done) => {
    inject([SyncRequestedEpics, XHRBackend, MdSnackBar],
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
    }
  }

});
