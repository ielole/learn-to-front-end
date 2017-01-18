import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goal-display/achievement/update', 'Integration | Component | goal display/achievement/update', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goal-display/achievement/update}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#goal-display/achievement/update}}
      template block text
    {{/goal-display/achievement/update}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
