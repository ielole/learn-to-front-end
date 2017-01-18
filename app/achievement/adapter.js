import ApplicationAdapter from 'learn-to-app/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, {includeId: true});
    let goalId = serialized.goal_id;
    let url = `${api}/goals/${goalId}/achievements`;
    let data = { achievement: serialized };

    return this.ajax(url, 'POST', { data });
  },
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
});
