import Service from '@ember/service';
import { A } from '@ember/array';

export default class TransactionService extends Service {
  transactions = A([
    {
      id: 1,
      amount: 60000,
      description: 'Salary',
      dateAdded: '2024-02-27',
    },
    {
      id: 2,
      amount: -5000,
      description: 'Bought some furniture for personal use',
      dateAdded: '2024-01-30',
    },
    {
      id: 3,
      amount: -100,
      description: 'Bought chocolates',
      dateAdded: '2024-02-18',
    },
  ]);

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter((item) => item.id != id);
  }

  updateTransaction(transObj) {
    this.transactions = this.transactions.map((item) => {
      if (item.id == transObj.id) {
        item.amount = transObj.amount;
        item.description = transObj.description;
        item.dateAdded = transObj.dateAdded;
      }
      return item;
    });
  }
}
