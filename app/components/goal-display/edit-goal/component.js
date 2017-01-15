import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      this.sendAction('save', this.get('goal'));
      console.log("This is this.get('goal.startDate'):", this.get('goal.startDate'));
      console.log("This is this.get('goal'): ", this.get('goal'));
    },
  },
});
