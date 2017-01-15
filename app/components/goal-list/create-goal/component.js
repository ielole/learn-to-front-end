import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      this.sendAction('save', this.get('goal'));
    },
    cancel () {
      this.sendAction('cancel', this.get('goal'));
      console.log("Are you a goal or a resolution?");
      // this.transitionTo('goals');
    }
  },
});
