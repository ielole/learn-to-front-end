import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('goal', params.goal_id);
  },
  actions: {
    createAchievement (data) {
      console.log("This is inside goal route.js, newLog is: ", data);
      // data.goal = this.get('goal');
      let achievement = this.get('store').createRecord('achievement', data);
      console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
      achievement.save();
    },
  },
});
