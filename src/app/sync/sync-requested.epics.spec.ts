import { inject, TestBed } from '@angular/core/testing';
import { ActionsObservable } from 'redux-observable';
import { SyncActivatedEpics } from './sync-activated.epics';
import { SyncActions } from './sync.actions';
import { MatSnackBar } from '@angular/material';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { SyncRequestedEpics } from './sync-requested.epics';
import { Angulartics2 } from 'angulartics2';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { toArray } from 'rxjs/operators';

describe('SyncRequestedEpics', () => {

  beforeEach(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        SyncRequestedEpics,
        SyncActions,
        AuthenticationActions,
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: MatSnackBar, useClass: SnackBarMock},
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
    inject([SyncRequestedEpics],
      (epics: SyncActivatedEpics) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_SUCCESS, payload: {lastUpdate: 1}},
        ];
        performAction(epics, expectedOutputActions, done);
        mockBackendResponse({lastUpdate: 1});
      })();
  });

  it('should not sync and logout when unauthenticated', (done) => {
    inject([SyncRequestedEpics, MatSnackBar],
      (epics: SyncActivatedEpics, snack: SnackBarMock) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_FAILED},
          {type: AuthenticationActions.LOGOUT}
        ];
        performAction(epics, expectedOutputActions, done, snack, 'ausgeloggt');
        mockBackendError(401);
      })();
  });

  it('should not sync on error', (done) => {
    inject([SyncRequestedEpics],
      (epics: SyncActivatedEpics) => {
        const expectedOutputActions = [
          {type: SyncActions.SYNC_FAILED},
          {type: SyncActions.SYNC_ACTIVATE_REQUEST}
        ];
        performAction(epics, expectedOutputActions, done);
        mockBackendError(409);
      })();
  });


  function performAction(epics, expectedOutputActions, done, snack?, message?) {
    epics.createEpics()(action$)
      .pipe(
        toArray()
      )
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
    http.expectOne('/api/sfs/sync').flush(body);
  }

  function mockBackendError(status: number) {
    const http = TestBed.get(HttpTestingController);
    http.expectOne('/api/sfs/sync').error({}, {status});
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
