import { helper } from '@ember/component/helper';

export default helper(function expense(positional /*, named*/) {
  var transactions = positional[0];
  var expense =
    -1 *
    transactions.filter((t) => t.amount < 0).reduce((a, t) => a + t.amount, 0);
  return expense;
});
