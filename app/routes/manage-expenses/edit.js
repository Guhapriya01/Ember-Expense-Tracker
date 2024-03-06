import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  transaction: service(),
  router: service(),

  model(params) {
    let t;
    this.transaction.transactions.forEach((item) => {
      if (item.id == params.id) {
        t = item;
        return;
      }
    });
    // this.controller.amount = t.amount;
    // this.controller.description = t.description;
    // this.controller.date = t.dateAdded;
    return t;
  },
});
