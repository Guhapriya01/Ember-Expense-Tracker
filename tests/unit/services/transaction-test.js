import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Service | transaction', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:transaction');
    assert.ok(service);
  });
});
