import { AuthenticationEpics } from './authentication.epics';
import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthenticationActions } from './authentication.actions';
import { MdSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { UPDATE_LOCATION } from '@angular-redux/router';
import { Angulartics2 } from 'angulartics2';
describe('AuthenticationEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthenticationEpics,
        AuthenticationActions,
        RouterActions,
        SyncActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MdSnackBar, useClass: SnackBarMock},
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should process succesful login', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, XHRBackend, MdSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, mockBackend: MockBackend, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [
          {type: AuthenticationActions.LOGIN_SUCCESS, payload: {jwt: 'token', userName: 'user', userId: 'id'}},
          {type: UPDATE_LOCATION, payload: '/schedule'}
        ];
        mockBackendResponse(mockBackend, {token: 'token', userName: 'user', userId: 'id'}, 200);
        performAction(epics, action$, expectedOutputActions, done);
      })();
  });

  it('should actvivate sync and navigate to schedule after successful login', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, XHRBackend, MdSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, mockBackend: MockBackend, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginSuccess('', '', ''));
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_REQUEST}
        ];
        mockBackendResponse(mockBackend, {token: 'token', userName: 'user'}, 200);
        performAction(epics, action$, expectedOutputActions, done, snack, 'erfolgreich');
      })();
  });

  it('should process failed login with incorrect password', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, XHRBackend, MdSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, mockBackend: MockBackend, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [{type: AuthenticationActions.LOGIN_FAILED}];
        const errorBody = {key: 'wrong_password'};
        mockBackendError(mockBackend, errorBody, 401);
        performAction(epics, action$, expectedOutputActions, done, snack, 'Passwort');
      })();
  });

  it('should process failed login without internet connection', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, XHRBackend, MdSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, mockBackend: MockBackend, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [{type: AuthenticationActions.LOGIN_FAILED}];
        mockBackendError(mockBackend, null, 0);
        performAction(epics, action$, expectedOutputActions, done, snack, 'Internetverbindung');
      })();
  });

  it('should logout', (done) => {
    inject([AuthenticationEpics, AuthenticationActions],
      (epics: AuthenticationEpics, actions: AuthenticationActions) => {
        const action$ = ActionsObservable.of(actions.logout());
        const expectedOutputActions = [
          {type: SyncActions.SYNC_DEACTIVATED}
        ];
        performAction(epics, action$, expectedOutputActions, done);
      })();
  });

  function performAction(epics, action$, expectedOutputActions, done, snack?, message?) {
    Observable.merge(...epics.createEpics().map(epic => epic(action$)))
      .toArray()
      .subscribe(outputActions => {
        expect(outputActions).toEqual(expectedOutputActions);
        if (snack) {
          expect(snack.message).toContain(message);
        }
        done();
      });
  }

  function mockBackendResponse(mockBackend: MockBackend, body: Object, status: number) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body, status})));
    });
  }

  function mockBackendError(mockBackend: MockBackend, body: Object, status: number) {
    body = JSON.stringify(body);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockError(new MockError(new ResponseOptions({body, status})));
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
