import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ExpenseController extends Controller {
  amount = null;
  description = null;
  date = null;

  @action
  enteredData() {
    let val = event.target.value;
    if (val) {
      this.set('userEnteredData', true);
    } else {
      this.set('userEnteredData', false);
    }
  }
}
