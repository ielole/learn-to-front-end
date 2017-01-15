import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('goal', {});
  },
  actions: {
    createGoal (goal) {
      console.log("I'm in the createGoal Action!");
      goal.save();
    },
    cancelCreateGoal (goal) {
      console.log("I'm in the cancelCreateGoal Action! This is a goal:", goal);
      // goal.rollbackAttributes();
    },
  },
});
