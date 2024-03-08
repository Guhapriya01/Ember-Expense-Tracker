import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ManageExpensesEditController extends Controller {
  @service transaction;
  @service router;

  @action
  edit(id) {
    var amount = +this.model.amount;
    var description = this.model.description;
    var date = this.model.dateAdded;

    if (!amount || !description || !date) {
      alert('Enter all data to continue editing!');
      return;
    }

    let transObj = {
      id: id,
      amount: amount,
      description: description,
      dateAdded: date,
    };

    this.transaction.updateTransaction(transObj);
    alert('Edited');
    this.router.transitionTo('manage-expenses');
  }
}
