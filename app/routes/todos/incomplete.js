import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('todo', {
      orderBy: 'complete',
      equalTo: false
    });
  },
  renderTemplate(controller, model) {
    this.render('todos.index', {
      model: model
    });
  }
});
