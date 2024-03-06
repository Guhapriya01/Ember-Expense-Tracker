import Service from '@ember/service';

export default class AuthenticationService extends Service {
  isAuthenticated = null;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
