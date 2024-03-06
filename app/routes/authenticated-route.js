import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authentication: service(),
  router: service(),

  beforeModel() {
    console.log('Authenticated');
    if (!this.authentication.isAuthenticated) {
      this.router.transitionTo('login');
    }
  },
});
