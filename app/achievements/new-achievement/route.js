import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAchievement (newLog) {
      console.log("This is inside goal route.js, newLog is: ", newLog);
      let achievement = this.get('store').createRecord('achievement', newLog);
      console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
      achievement.save();
    },
  },
});
