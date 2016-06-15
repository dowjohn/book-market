import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(){
      this.get("shoppingCart").add(this.get("book"))
    },
    remove(){
      this.get("shoppingCart").remove(this.get("book"))
    },
    deleteBook(){
      this.book.destroyRecord();
      this.sendAction('goHome');
    }
  }
});
