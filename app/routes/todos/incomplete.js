import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('todo', {
      orderBy: 'complete',
      equalTo: false
    });
    // below works to limit to only not complete items, but it seems to lose its firebase binding
    //return this.store.filter('todo', {orderBy: 'complete', equalTo: false}, function(todo) {
    //  console.log(todo.title + " " - todo.complete);
    //  return !todo.get('complete');
    //});
  },
  renderTemplate(controller, model) {
    this.render('todos.index', {
      model: model
    });
  }
});
