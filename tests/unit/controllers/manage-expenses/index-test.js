import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Controller | manage-expenses/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:manage-expenses/index');
    assert.ok(controller);
  });
});
