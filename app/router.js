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
  this.route('goal/new-achievement', {path: 'goal/:goal_id/new-achievement'});
  this.route('goal/update-goal', {path: 'goals/:goal_id/update-goal'});
  this.route('achievement', { path: 'goals/:goal_id/achievements/:achievement_id'});
  this.route('achievement/update-achievement', { path: 'achievements/:achievement_id'});
  this.route('achievements', {path: 'goals/:goal_id/achievements'});
  this.route('achievements.new-achievement', {path: 'achievements/new-achievement'});
});

export default Router;
