import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return this.get('store').createRecord('goal', {});
  },
  actions: {
    createGoal (goal) {
      console.log("I'm inside goals/new-goal route.js and this is goal: ", goal);
      console.log("This is this.get('goal'): ", this.get('goal'));
      console.log("This is this.get('goal.startDate'):", goal.get('startDate'));
      goal.save();
      console.log("I'm inside goals/new-goal route.js and this is goal: after save", goal);
      console.log("This is goal.get('startDate'), AFTER save:", goal.get('startDate'));
    },
  },
});
