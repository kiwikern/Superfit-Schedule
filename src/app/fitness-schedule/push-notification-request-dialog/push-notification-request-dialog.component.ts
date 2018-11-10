import { Component, OnInit } from '@angular/core';
import { SettingsActions } from '../store/settings/settings.actions';
import { SettingsPayload } from '../store/settings/settings-payload';
import { ShowPushnotificationsState } from '../store/settings/settings-state';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'sfs-push-notification-request-dialog',
  templateUrl: './push-notification-request-dialog.component.html',
  styleUrls: ['./push-notification-request-dialog.component.css']
})
export class PushNotificationRequestDialogComponent implements OnInit {

  constructor(private actions: SettingsActions,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  enable() {
    this.changeSetting(ShowPushnotificationsState.ENABLED);
  }

  decline() {
    this.changeSetting(ShowPushnotificationsState.DISABLED);
    this.snackBar.open(
      'Du kannst die Benachrichtigungen über Einstellungen > Sonstiges aktivieren.',
      'OK',
      {duration: 5000});
  }

  private changeSetting(value: ShowPushnotificationsState) {
    const payload: SettingsPayload = {name: 'showPushNotifications', value};
    this.actions.changeSetting(payload);
  }

}
