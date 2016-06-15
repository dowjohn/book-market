import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBook() {
      var params = {
        bookName: this.get('book-name'),
        author: this.get('author'),
        cost: this.get('cost'),
        description: this.get('description'),
        imgURL:  this.get('imgURL'),
      };
      this.sendAction('saveBook', params);
    }
  }
});
