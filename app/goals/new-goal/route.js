import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    // this.get('store').createRecord('goal', {});
  },
  actions: {
    createGoal (data) {
      console.log("This is inside goal route.js, newLog is: ", data);
      let goal = this.get('store').createRecord('goal', data);
      console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", goal);
    goal.save();
    },
  },
});
