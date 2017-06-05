export interface AuthenticationState {
  isRequesting: boolean;
  jwt?: string;
  userName?: string;
}
