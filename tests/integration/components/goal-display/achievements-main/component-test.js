import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goal-display/achievements-main', 'Integration | Component | goal display/achievements main', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goal-display/achievements-main}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#goal-display/achievements-main}}
      template block text
    {{/goal-display/achievements-main}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
