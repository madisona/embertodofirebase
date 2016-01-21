import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  change: function(e) {
    // this is being used to pick up marking the checklist item as done.
    this.sendAction('updateTodo', this.get('todo'));
    return false;
  },
  actions: {
    editTodo() {
      this.toggleProperty('editing');
    },
    submitTodo() {
      let todo = this.get('todo');
      if (todo.get('title') === "") {
        this.sendAction('deleteTodo', todo);
      } else {
        this.sendAction('updateTodo', todo);
      }
      this.set('editing', false);
    },
    deleteTodo() {
      let todo = this.get('todo');
      this.sendAction('deleteTodo', todo);
    }
  }
});
