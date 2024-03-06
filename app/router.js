import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('expense');
  this.route('manage-expenses', function () {
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('not-found', { path: '/*path' });
  this.route('login');
  this.route('user-guide');
});
