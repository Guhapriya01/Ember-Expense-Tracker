import { helper } from '@ember/component/helper';

export default helper(function total(positional /*, named*/) {
  var transactions = positional[0];
  var total = transactions.reduce((a, t) => a + t.amount, 0);
  return total;
});
