export interface AuthenticationState {
  isLoggedIn: boolean;
  isRequesting: boolean;
  jwt?: string;
}
