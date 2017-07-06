export interface SyncState {
  hasError: boolean;
  isRequesting: boolean;
  isSyncActivated: boolean;
  lastUpdate: number;
  userId: string;
}
