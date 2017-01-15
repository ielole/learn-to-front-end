import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      console.log("I'm in the goals-main component and I am deleting this goal: ", this.get('goal'));
      this.sendAction('delete', this.get('goal'));
    },
  },
});
