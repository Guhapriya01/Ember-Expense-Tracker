// import Route from '@ember/routing/route';
import AuthenticatedRoute from './authenticated-route';
import { inject as service } from '@ember/service';

export default AuthenticatedRoute.extend({
  transaction: service(),

  // beforeModel() {
  //   this._super();
  //   console.log('not-Authenticated');
  // },

  actions: {
    willTransition(transition) {
      if (
        this.controller.userEnteredData &&
        !confirm('Are you sure you want to abandon progress?')
      ) {
        transition.abort();
      } else {
        this.controller.userEnteredData = false;
      }
    },

    add() {
      var amount = +this.controller.amount;
      var description = this.controller.description;
      var date = this.controller.date;

      if (!amount || !description || !date) {
        alert('Enter all data to add!');
        return;
      }

      let transObj = {
        id: Math.floor(Math.random() * 1000),
        amount: amount,
        description: description,
        dateAdded: date,
      };

      this.transaction.addTransaction(transObj);
      alert('Added');

      this.controller.amount = '';
      this.controller.description = '';
      this.controller.date = '';
      this.controller.userEnteredData = false;

      this.router.transitionTo('manage-expenses');
    },
  },
});
