import Service from '@ember/service';
import { A } from '@ember/array';
import EmberObject,{set} from '@ember/object';

export default class TransactionService extends Service {
  transactions = A([
    EmberObject.create({
      id: 1,
      amount: 60000,
      description: 'Salary',
      dateAdded: '2024-02-27',
    }),
    EmberObject.create({
      id: 2,
      amount: -5000,
      description: 'Bought some furniture for personal use',
      dateAdded: '2024-01-30',
    }),
    EmberObject.create({
      id: 3,
      amount: -100,
      description: 'Bought chocolates',
      dateAdded: '2024-02-18',
    }),
  ]);

  addTransaction(transaction) {
    this.transactions.push( EmberObject.create(transaction));
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter((item) => item.id != id);
  }

  updateTransaction(transObj) {
    this.transactions = this.transactions.map((item) => {
      if (item.id == transObj.id) {
        set(item,'amount',transObj.amount);
        set(item,"description" ,transObj.description);
        item.set("dateAdded" , transObj.dateAdded);
      }
      return item;
    });
  }
}
