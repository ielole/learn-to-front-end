import Ember from 'ember';

export default Ember.Component.extend({
  newLog: {
    log: null,
    image: null,
  },
  actions: {
    createAchievement () {
      console.log("This is newLog: ", this.get('newLog'));
      let data = this.get('newLog');
      console.log("This is data: ", data);
      data.goal = this.get('goal');
      console.log("This is data after data.goal:", data);
      this.sendAction('createAchievement', data);
      // console.log("This is this.sendAction('createAchievement', data);: ", this.sendAction('createAchievement', data));
      // console.log("This is data after sendAction: ", data);
    },
  },
});
