import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationRequestDialogComponent } from './push-notification-request-dialog.component';

describe('PushNotificationRequestDialogComponent', () => {
  let component: PushNotificationRequestDialogComponent;
  let fixture: ComponentFixture<PushNotificationRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
