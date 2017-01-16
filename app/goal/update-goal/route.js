import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('goal', params.goal_id);
  },
  actions: {
    updateGoal (goal) {
      console.log("This is inside goal/update-goal route.js and this is goal:", goal);
      goal.save();
    },
  },
});
