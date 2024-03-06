import { helper } from '@ember/component/helper';

export default helper(function income(positional /*, named*/) {
  var transactions = positional[0];
  var income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, t) => a + t.amount, 0);
  return income;
});
