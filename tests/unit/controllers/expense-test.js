import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Controller | expense', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:expense');
    assert.ok(controller);
  });
});
