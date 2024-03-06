// import Route from '@ember/routing/route';
import AuthenticatedRoute from './authenticated-route';
import { inject as service } from '@ember/service';

export default AuthenticatedRoute.extend({
  transaction: service(),

  actions: {
    delete(id) {
      this.transaction.deleteTransaction(id);
      this.refresh();
    },
  },

  model() {
    return {
      transactions: this.transaction.transactions,
    };
  },
});
