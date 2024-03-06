import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Route | expense', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:expense');
    assert.ok(route);
  });
});
