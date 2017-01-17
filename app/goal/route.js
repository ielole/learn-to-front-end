import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('goal', params.goal_id);
  },
  actions: {
    createAchievement (newLog) {
      console.log("This is inside goal route.js, newLog is: ", newLog);
      let achievement = this.get('store').createRecord('achievement', newLog);
      console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
      achievement.save();
    },
  },
});
