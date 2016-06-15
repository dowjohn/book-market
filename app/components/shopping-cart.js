import Ember from 'ember';

export default Ember.Component.extend({

  shoppingCart: Ember.inject.service(),
  total: Ember.computed(function(){
    return this.get('shoppingCart').getTotal();
  })
});
