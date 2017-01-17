import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('achievement', params.achievement_id);
  },
  actions: {
    deleteAchievement (achievement) {
      achievement.destroyRecord();
      this.transitionTo('goals');
    },
  },
});
