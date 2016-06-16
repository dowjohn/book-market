import Ember from 'ember';

export default Ember.Component.extend({

  shoppingCart: Ember.inject.service(),
  total: Ember.computed(function(){
    console.log('is working');
    return this.get('shoppingCart').getTotal();
  }),

  actions: {
    removeFromCart(book) {
      this.get("shoppingCart").remove(book);
    }
  }
});
