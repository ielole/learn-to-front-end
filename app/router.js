import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('about');
  this.route('goals');
  this.route('goals/new-goal');
  this.route('goal', { path: 'goals/:goal_id' });
  this.route('goal/update-goal', {path: 'goals/:goal_id/update-goal'});
  this.route('achievement', { path: 'goals/:goal_id/achievement'});
});

export default Router;
