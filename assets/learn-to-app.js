"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define("learn-to-app/about/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q4T/3a7X", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  Welcome, 'Learn To' is designed to help you stay on track to accomplish your\\n  resolutions and goals. Make a resolution or set a goal, decide on a milestone\\n  that you'd like to achieve in 30 days and then add a daily achievement each day for the next 365 days. Add pictures, get motivational quotes and track your progress.\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/about/template.hbs" } });
});
define('learn-to-app/achievement/adapter', ['exports', 'learn-to-app/application/adapter'], function (exports, _learnToAppApplicationAdapter) {
  exports['default'] = _learnToAppApplicationAdapter['default'].extend({
    createRecord: function createRecord(store, type, record) {
      var api = this.get('host');
      var serialized = this.serialize(record, { includeId: true });
      var goalId = serialized.goal_id;
      var url = api + '/goals/' + goalId + '/achievements';
      var data = { achievement: serialized };

      return this.ajax(url, 'POST', { data: data });
    }
  });
});
// findAll (store, type, record) {
//   let api = this.get('host');
//   let serialized = this.serialize(record, {includeId: true});
//   let goalId = serialized.goal_id;
//   let url = `${api}/goals/${goalId}/achievements`;
//   let data = { achievement: serialized };
//
//   return this.ajax(url, 'GET', { data });
// },
// findRecord (store, type, record) {
//   let api = this.get('host');
//   let serialized = this.serialize(record, {includeId: true});
//   let goalId = serialized.goal_id;
//   let achievementId = serialized.achievement_id;
//   let url = `${api}/goals/${goalId}/achievements/${achievementId}`;
//   let data = { achievement: serialized };
//
//   return this.ajax(url, 'GET', { data });
// },
// deleteRecord (store, type, record) {
//   let api = this.get('host');
//   let serialized = this.serialize(record, {includeId: true});
//   let goalId = serialized.goal_id;
//   let achievementId = serialized.achievement_id;
//   let url = `${api}/goals/${goalId}/achievements/${achievementId}`;
//   let data = { achievement: serialized };
//
//   return this.ajax(url, 'DELETE', { data });
// },
// findRecord (store, type, record) {
//   let api = this.get('host');
//   let serialized = this.serialize(record, {includeId: true});
//   let goalId = serialized.goal_id;
//   let achievementId = serialized.achievement_id;
//   let url = `${api}/goals/${goalId}/achievements/${achievementId}`;
//   let data = { achievement: serialized };
//
//   return this.ajax(url, 'PATCH', { data });
// },
define('learn-to-app/achievement/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    log: _emberData['default'].attr('string'),
    image: _emberData['default'].attr('string'),
    goal: _emberData['default'].belongsTo('goal')
  });
});
define('learn-to-app/achievement/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('achievement', params.achievement_id);
    },
    actions: {
      deleteAchievement: function deleteAchievement(achievement) {
        achievement.destroyRecord();
        this.transitionTo('goals');
      }
    }
  });
});
define("learn-to-app/achievement/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "g8LT9Vo2", "block": "{\"statements\":[[\"text\",\"In achievement template.hbs\\n\"],[\"append\",[\"helper\",[\"goal-display/achievement\"],null,[[\"goal\",\"achievement\",\"delete\"],[[\"get\",[\"goal\"]],[\"get\",[\"model\"]],\"deleteAchievement\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/achievement/template.hbs" } });
});
define('learn-to-app/achievement/update-achievement/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('achievement', params.achievement_id);
    },
    actions: {
      updateAchievement: function updateAchievement(achievement) {
        achievement.save();
      }
    }
  });
});
define("learn-to-app/achievement/update-achievement/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ilSEHzU9", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display/achievement/update\"],null,[[\"achievement\",\"save\"],[[\"get\",[\"model\"]],\"updateAchievement\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/achievement/update-achievement/template.hbs" } });
});
define('learn-to-app/achievements/new-achievement/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      createAchievement: function createAchievement(newLog) {
        console.log("This is inside goal route.js, newLog is: ", newLog);
        var achievement = this.get('store').createRecord('achievement', newLog);
        console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
        achievement.save();
      }
    }
  });
});
define("learn-to-app/achievements/new-achievement/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "O8KIUpX3", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display/achievement/edit\"],null,[[\"goal\",\"createAchievement\"],[[\"get\",[\"goal\"]],\"createAchievement\"]]],false],[\"text\",\"\\nIn achievements/new-achievement template.hbs\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/achievements/new-achievement/template.hbs" } });
});
define('learn-to-app/achievements/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("learn-to-app/achievements/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cMbm7ghF", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/achievements/template.hbs" } });
});
define('learn-to-app/ajax/service', ['exports', 'ember', 'ember-ajax/services/ajax', 'https://warm-refuge-42424.herokuapp.com/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _httpsWarmRefuge42424HerokuappComConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _httpsWarmRefuge42424HerokuappComConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('learn-to-app/app', ['exports', 'ember', 'learn-to-app/resolver', 'ember-load-initializers', 'learn-to-app/config/environment'], function (exports, _ember, _learnToAppResolver, _emberLoadInitializers, _learnToAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _learnToAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _learnToAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _learnToAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _learnToAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('learn-to-app/application/adapter', ['exports', 'https://warm-refuge-42424.herokuapp.com/config/environment', 'active-model-adapter', 'ember'], function (exports, _httpsWarmRefuge42424HerokuappComConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _httpsWarmRefuge42424HerokuappComConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('learn-to-app/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('learn-to-app/application/serializer', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define("learn-to-app/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PaedEnYR", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/application/template.hbs" } });
});
define('learn-to-app/auth/service', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('learn-to-app/auth/storage', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define('learn-to-app/change-password/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define("learn-to-app/change-password/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UdBMV9/a", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/change-password/template.hbs" } });
});
define('learn-to-app/components/change-password-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define("learn-to-app/components/change-password-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jVwrAgmG", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/change-password-form/template.hbs" } });
});
define('learn-to-app/components/email-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("learn-to-app/components/email-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nBfe4KMy", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/email-input/template.hbs" } });
});
define('learn-to-app/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('learn-to-app/components/goal-display/achievement/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete() {
        this.sendAction('delete', this.get('achievement'));
      }
    }
  });
});
define('learn-to-app/components/goal-display/achievement/edit/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newLog: {
      log: null,
      image: null
    },
    actions: {
      createAchievement: function createAchievement() {
        console.log("This is newLog: ", this.get('newLog'));
        var data = this.get('newLog');
        console.log("This is data: ", data);
        data.goal = this.get('goal');
        console.log("This is data after data.goal:", data);
        this.sendAction('createAchievement', data);
        // console.log("This is this.sendAction('createAchievement', data);: ", this.sendAction('createAchievement', data));
        // console.log("This is data after sendAction: ", data);
      }
    }
  });
});
define("learn-to-app/components/goal-display/achievement/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sQi5Z//D", "block": "{\"statements\":[[\"text\",\"This is the goal you're working towards: \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"goal\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createAchievement\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"log-text\"],[\"flush-element\"],[\"text\",\"Today's Progress\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Record today's achievement!\",[\"get\",[\"newLog\",\"log\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"log-image\"],[\"flush-element\"],[\"text\",\"Today's Picture\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Add a picture to represent today's achievement.\",[\"get\",[\"newLog\",\"image\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-xs btn-info\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/achievement/edit/template.hbs" } });
});
define("learn-to-app/components/goal-display/achievement/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/Yyu2nGw", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"DAY:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"goal\"]],false],[\"close-element\"],[\"text\",\"\\nThis is my log: \"],[\"append\",[\"unknown\",[\"achievement\",\"log\"]],false],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\nThis is an image url: \"],[\"append\",[\"unknown\",[\"achievement\",\"image\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"achievement/update-achievement\",[\"get\",[\"achievement\"]]],null,0],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\"]],[\"flush-element\"],[\"text\",\"Delete Daily Achievement\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-secondary\"],[\"flush-element\"],[\"text\",\"Update Daily Achievement\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/achievement/template.hbs" } });
});
define('learn-to-app/components/goal-display/achievement/update/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('achievement'));
      }
    }
  });
});
define("learn-to-app/components/goal-display/achievement/update/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KkG8xPVT", "block": "{\"statements\":[[\"text\",\"This is the goal you're working towards: \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"goal\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"log-text\"],[\"flush-element\"],[\"text\",\"Today's Progress\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Record today's achievement!\",[\"get\",[\"achievement\",\"log\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"log-image\"],[\"flush-element\"],[\"text\",\"Today's Picture\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Add a picture to represent today's achievement.\",[\"get\",[\"achievement\",\"image\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-xs btn-info\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/achievement/update/template.hbs" } });
});
define('learn-to-app/components/goal-display/achievements-main/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("learn-to-app/components/goal-display/achievements-main/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QnnngvyU", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"achievement\",[\"get\",[\"achievement\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-lg btn-success\"],[\"flush-element\"],[\"text\",\"\\nThis is my log: \"],[\"append\",[\"unknown\",[\"achievement\",\"log\"]],false],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\nThis is an image url: \"],[\"append\",[\"unknown\",[\"achievement\",\"image\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/achievements-main/template.hbs" } });
});
define('learn-to-app/components/goal-display/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    // actions: {
    //   createAchievement (newLog) {
    //     console.log("This is newLog:", newLog);
    //     this.sendAction('createAchievement', newLog);
    //     // console.log("This is this.get('achievement'): ", this.get('achievement'));
    //     // this.sendAction('createAchievement', this.get('achievement'));
    //     // console.log("This is this.get('goal'): ", this.get('goal'));
    //     // this.sendAction('createAchievement', this.get('goal'));
    //   },
    // },
  });
});
define('learn-to-app/components/goal-display/edit-goal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('goal'));
        console.log("This is this.get('goal.startDate'):", this.get('goal.startDate'));
        console.log("This is this.get('goal'): ", this.get('goal'));
      }
    }
  });
});
define("learn-to-app/components/goal-display/edit-goal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "z0YHKx7B", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-name\"],[\"flush-element\"],[\"text\",\"Name of Goal\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Name of Goal\",[\"get\",[\"goal\",\"title\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-start-date\"],[\"flush-element\"],[\"text\",\"Start Date\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"YYYY-MM-DD HH:MM:SS\",[\"get\",[\"goal\",\"startDate\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-end-date\"],[\"flush-element\"],[\"text\",\"End Date\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"YYYY-MM-DD HH:MM:SS\",[\"get\",[\"goal\",\"endDate\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-success\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/edit-goal/template.hbs" } });
});
define('learn-to-app/components/goal-display/new-goal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newGoal: {
      title: null,
      startDate: null,
      endDate: null
    },
    actions: {
      save: function save() {
        console.log("This is newGoal", this.get('newGoal'));
        var data = this.get('newGoal');
        data.user = this.get('user');
        this.sendAction('save', data);
      }
    }
  });
});
define("learn-to-app/components/goal-display/new-goal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Hr9kQo/c", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-name\"],[\"flush-element\"],[\"text\",\"Name of Goal\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"Name of Goal\",[\"get\",[\"newGoal\",\"title\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-start-date\"],[\"flush-element\"],[\"text\",\"Start Date\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"YYYY-MM-DD HH:MM:SS\",[\"get\",[\"newGoal\",\"startDate\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"goal-end-date\"],[\"flush-element\"],[\"text\",\"End Date\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"value\"],[\"YYYY-MM-DD HH:MM:SS\",[\"get\",[\"newGoal\",\"endDate\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-success\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/new-goal/template.hbs" } });
});
define("learn-to-app/components/goal-display/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YKLpJ3jF", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Goal: \"],[\"append\",[\"unknown\",[\"goal\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"goal/update-goal\",[\"get\",[\"goal\"]]],null,2],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Start Date: \"],[\"append\",[\"unknown\",[\"goal\",\"startDate\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"End Date: \"],[\"append\",[\"unknown\",[\"goal\",\"endDate\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"goal\",\"achievements\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"goal/new-achievement\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-primary\"],[\"flush-element\"],[\"text\",\"Add A Daily Achievement\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"goal-display/achievements-main\"],null,[[\"achievement\",\"delete\"],[[\"get\",[\"achievement\"]],\"deleteAchievement\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"achievement\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-xs btn-warning\"],[\"flush-element\"],[\"text\",\"Update Goal\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goal-display/template.hbs" } });
});
define('learn-to-app/components/goals-main/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete() {
        console.log("I'm in the goals-main component and I am deleting this goal: ", this.get('goal'));
        this.sendAction('delete', this.get('goal'));
      }
    }
  });
});
define("learn-to-app/components/goals-main/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8igUzFvZ", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"goal\",[\"get\",[\"goal\"]]],null,0],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-small btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\"]],[\"flush-element\"],[\"text\",\"Delete Goal\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-small btn-secondary\"],[\"flush-element\"],[\"text\",\"Goal: \"],[\"append\",[\"unknown\",[\"goal\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/goals-main/template.hbs" } });
});
define('learn-to-app/components/hamburger-menu/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define("learn-to-app/components/hamburger-menu/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "R2YewF8Q", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/hamburger-menu/template.hbs" } });
});
define('learn-to-app/components/my-application/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define("learn-to-app/components/my-application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QtnNuGmO", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,9],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,7,4],[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"about\"],null,1],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Learn To: A Resolution Tracker\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-up\"],null,3],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-in\"],null,2],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Your Goals\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"goals\"],null,6],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,5],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Users\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"users\"],null,8],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/my-application/template.hbs" } });
});
define('learn-to-app/components/navbar-header/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define("learn-to-app/components/navbar-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FWp9Cdu0", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/navbar-header/template.hbs" } });
});
define('learn-to-app/components/password-confirmation-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("learn-to-app/components/password-confirmation-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Rpy4jgXY", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/password-confirmation-input/template.hbs" } });
});
define('learn-to-app/components/password-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("learn-to-app/components/password-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "urpfwMbE", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/password-input/template.hbs" } });
});
define('learn-to-app/components/sign-in-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define("learn-to-app/components/sign-in-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3nUkHvOc", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/sign-in-form/template.hbs" } });
});
define('learn-to-app/components/sign-up-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define("learn-to-app/components/sign-up-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "d8X71Zot", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/components/sign-up-form/template.hbs" } });
});
define('learn-to-app/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('learn-to-app/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('learn-to-app/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('learn-to-app/goal/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    startDate: _emberData['default'].attr('string'),
    endDate: _emberData['default'].attr('string'),
    achievements: _emberData['default'].hasMany('achievement')
  });
});
define('learn-to-app/goal/new-achievement/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var goal = this.modelFor('goal.new-achievement');
    },
    actions: {
      createAchievement: function createAchievement(data) {
        console.log("This is inside goal route.js, newLog is: ", data);
        data.goal = this.get('goal');
        var achievement = this.get('store').createRecord('achievement', data);
        console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
        achievement.save();
      }
    }
  });
});
define("learn-to-app/goal/new-achievement/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tJcNSyag", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display/achievement/edit\"],null,[[\"goal\",\"createAchievement\"],[[\"get\",[\"goal\"]],\"createAchievement\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/goal/new-achievement/template.hbs" } });
});
define('learn-to-app/goal/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('goal', params.goal_id);
    },
    actions: {
      createAchievement: function createAchievement(newLog) {
        console.log("This is inside goal route.js, newLog is: ", newLog);
        var achievement = this.get('store').createRecord('achievement', newLog);
        console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", achievement);
        achievement.save();
      }
    }
  });
});
define("learn-to-app/goal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RKYT4VRE", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display\"],null,[[\"goal\",\"createAchievement\",\"deleteAchievement\"],[[\"get\",[\"model\"]],\"createAchievement\",\"deleteAchievement\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/goal/template.hbs" } });
});
define('learn-to-app/goal/update-goal/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('goal', params.goal_id);
    },
    actions: {
      updateGoal: function updateGoal(goal) {
        console.log("This is inside goal/update-goal route.js and this is goal:", goal);
        goal.save();
      }
    }
  });
});
define("learn-to-app/goal/update-goal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mhpabpCb", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display/edit-goal\"],null,[[\"goal\",\"save\"],[[\"get\",[\"model\"]],\"updateGoal\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/goal/update-goal/template.hbs" } });
});
define('learn-to-app/goals/new-goal/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // this.get('store').createRecord('goal', {});
    },
    actions: {
      createGoal: function createGoal(data) {
        console.log("This is inside goal route.js, newLog is: ", data);
        var goal = this.get('store').createRecord('goal', data);
        console.log("Inside 'goal route' route.js 'createAchievement' and this is achievement: ", goal);
        goal.save();
      }
    }
  });
});
define("learn-to-app/goals/new-goal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hpg8BPYC", "block": "{\"statements\":[[\"append\",[\"helper\",[\"goal-display/new-goal\"],null,[[\"save\"],[\"createGoal\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/goals/new-goal/template.hbs" } });
});
define('learn-to-app/goals/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('goal');
    },
    actions: {
      deleteGoal: function deleteGoal(goal) {
        goal.destroyRecord();
      }
    }
  });
});
define("learn-to-app/goals/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6Vc8dFfU", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"My Goals\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"block\",[\"link-to\"],[\"goals/new-goal\"],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"flush-element\"],[\"text\",\"Create New Goal\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"goals-main\"],null,[[\"goal\",\"delete\"],[[\"get\",[\"goal\"]],\"deleteGoal\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"goal\"]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/goals/template.hbs" } });
});
define('learn-to-app/helpers/app-version', ['exports', 'ember', 'learn-to-app/config/environment'], function (exports, _ember, _learnToAppConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _learnToAppConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('learn-to-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('learn-to-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("learn-to-app/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('learn-to-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'learn-to-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _learnToAppConfigEnvironment) {
  var _config$APP = _learnToAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('learn-to-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('learn-to-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('learn-to-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('learn-to-app/initializers/export-application-global', ['exports', 'ember', 'learn-to-app/config/environment'], function (exports, _ember, _learnToAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_learnToAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _learnToAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_learnToAppConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('learn-to-app/initializers/flash-messages', ['exports', 'ember', 'learn-to-app/config/environment'], function (exports, _ember, _learnToAppConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _learnToAppConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('learn-to-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('learn-to-app/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('learn-to-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('learn-to-app/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('learn-to-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("learn-to-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('learn-to-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('learn-to-app/router', ['exports', 'ember', 'learn-to-app/config/environment'], function (exports, _ember, _learnToAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _learnToAppConfigEnvironment['default'].locationType
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
    this.route('goal/new-achievement', { path: 'goal/new-achievement' });
    this.route('goal/update-goal', { path: 'goals/:goal_id/update-goal' });
    this.route('achievement', { path: 'goals/:goal_id/achievements/:achievement_id' });
    this.route('achievement/update-achievement', { path: 'achievements/:achievement_id' });
    this.route('achievements', { path: 'goals/:goal_id/achievements' });
    this.route('achievements.new-achievement', { path: 'achievements/new-achievement' });
  });

  exports['default'] = Router;
});
define('learn-to-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('learn-to-app/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('learn-to-app/sign-in/route', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define("learn-to-app/sign-in/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "opYESOil", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/sign-in/template.hbs" } });
});
define('learn-to-app/sign-up/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define("learn-to-app/sign-up/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5mKbajG6", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/sign-up/template.hbs" } });
});
define('learn-to-app/user/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string')
  });
});
define('learn-to-app/users/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define("learn-to-app/users/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yaKtbVsH", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "learn-to-app/users/template.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('learn-to-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'learn-to-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("learn-to-app/app")["default"].create({"name":"learn-to-app","version":"0.0.0+0d3c0402"});
}

/* jshint ignore:end */
//# sourceMappingURL=learn-to-app.map
