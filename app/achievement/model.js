import DS from 'ember-data';

export default DS.Model.extend({
  log: DS.attr('string'),
  image: DS.attr('string'),
  goal: DS.belongsTo('goal'),
});
