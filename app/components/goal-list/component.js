import Ember from 'ember';

export default Ember.Component.extend({
  newGoal: {
    title: null,
    startDate: null,
    endDate: null,
  },
  actions: {
    createGoal (){
      console.log("This is newGoal", this.get('newGoal'));
      let data = this.get('newGoal');
      data.goal = this.get('goal');
      this.sendAction('createGoal', data);
    },
  },
});
