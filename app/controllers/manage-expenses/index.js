import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['sort'],
  sort: null,

  sortedTransactions: computed('sort', 'model', function () {
    let s = this.sort;

    if (s) {
      return this.model.transactions.sort((a, b) => {
        let aValue = a.amount;
        let bValue = b.amount;

        if (s == 'asc' && aValue > bValue) {
          return 1;
        } else if (s == 'desc' && aValue < bValue) {
          return 1;
        }
      });
    } else return this.model.transactions;
  }),
});
