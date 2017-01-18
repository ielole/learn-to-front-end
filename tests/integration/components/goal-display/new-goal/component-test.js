import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goal-display/new-goal', 'Integration | Component | goal display/new goal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goal-display/new-goal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#goal-display/new-goal}}
      template block text
    {{/goal-display/new-goal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
