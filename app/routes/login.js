import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authentication: service(),
  router: service(),

  actions: {
    login() {
      this.authentication.login();
      alert('Logged In successfully');
      this.router.transitionTo('index');
    },
  },
});
