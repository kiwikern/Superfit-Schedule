import { AuthenticationEpics } from './authentication.epics';
import { inject, TestBed } from '@angular/core/testing';
import { AuthenticationActions } from './authentication.actions';
import { MatSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { UPDATE_LOCATION } from '@angular-redux/router';
import { Angulartics2 } from 'angulartics2';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { toArray } from 'rxjs/operators';

describe('AuthenticationEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthenticationEpics,
        AuthenticationActions,
        RouterActions,
        SyncActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MatSnackBar, useClass: SnackBarMock},
      ]
    });
  });

  it('should process succesful login', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, MatSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [
          {type: AuthenticationActions.LOGIN_SUCCESS, payload: {jwt: 'token', userName: 'user', userId: 'id'}},
          {type: UPDATE_LOCATION, payload: '/schedule'}
        ];
        performAction(epics, action$, expectedOutputActions, done);
        mockBackendResponse({token: 'token', userName: 'user', userId: 'id'});
      })();
  });

  it('should actvivate sync and navigate to schedule after successful login', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, MatSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginSuccess('', '', ''));
        const expectedOutputActions = [
          {type: SyncActions.SYNC_ACTIVATE_REQUEST}
        ];
        performAction(epics, action$, expectedOutputActions, done, snack, 'erfolgreich');
      })();
  });

  it('should process failed login with incorrect password', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, MatSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [{type: AuthenticationActions.LOGIN_FAILED}];
        const errorBody = {key: 'wrong_password'};
        performAction(epics, action$, expectedOutputActions, done, snack, 'Passwort');
        mockBackendError(errorBody, 401);
      })();
  });

  it('should process failed login without internet connection', (done) => {
    inject([AuthenticationEpics, AuthenticationActions, MatSnackBar],
      (epics: AuthenticationEpics, actions: AuthenticationActions, snack: SnackBarMock) => {
        const action$ = ActionsObservable.of(actions.loginWithUserName('', ''));
        const expectedOutputActions = [{type: AuthenticationActions.LOGIN_FAILED}];
        performAction(epics, action$, expectedOutputActions, done, snack, 'Internetverbindung');
        mockBackendError(null, 0);
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
    Observable.merge(...epics.createEpics().map((epic: any) => epic(action$)))
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toEqual(expectedOutputActions);
        if (snack) {
          expect(snack.message).toContain(message);
        }
        done();
      });
  }

  function mockBackendResponse(body: Object) {
    const http = TestBed.get(HttpTestingController);
    http.expectOne('/api/sfs/user/session').flush(body);
  }

  function mockBackendError(body: Object, status: number) {
    const http = TestBed.get(HttpTestingController);
    http.expectOne('/api/sfs/user/session').error(body, {status});
  }

  class SnackBarMock {
    message: string;

    open(message, action, options) {
      this.message = message;
    }
  }
});
