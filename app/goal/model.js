import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
});
