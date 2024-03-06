import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Route | manage-expenses/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:manage-expenses/edit');
    assert.ok(route);
  });
});
