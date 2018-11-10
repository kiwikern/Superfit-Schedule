export interface SettingsState {
  showDaysInClasses: boolean;
  showStudio: boolean;
  showTodayFirst: boolean;
  showWorkoutType: boolean;
  showPushNotifications: ShowPushnotificationsState;
  daysLayout: string;
  hideReleasenotes: boolean;
}

export enum ShowPushnotificationsState {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  UNDECIDED = 'UNDECIDED',
}
