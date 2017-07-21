export interface AuthenticationState {
  isRequesting: boolean;
  userId: string;
  jwt?: string;
  userName?: string;
}
