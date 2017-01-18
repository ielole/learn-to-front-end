import Ember from 'ember';

export default Ember.Component.extend({
  newGoal: {
    title: null,
    startDate: null,
    endDate: null,
  },
  actions: {
    save () {
      console.log("This is newGoal", this.get('newGoal'));
      let data = this.get('newGoal');
      data.user = this.get('user');
      this.sendAction('save', data);
    },
  },
});
