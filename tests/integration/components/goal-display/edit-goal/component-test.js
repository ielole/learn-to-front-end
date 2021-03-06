import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goal-display/edit-goal', 'Integration | Component | goal display/edit goal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goal-display/edit-goal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#goal-display/edit-goal}}
      template block text
    {{/goal-display/edit-goal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
