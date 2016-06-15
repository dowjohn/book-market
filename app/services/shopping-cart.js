import Ember from 'ember';

export default Ember.Service.extend({
  books: [],
  add(book){
    this.get('books').pushObject(book);
  },
  remove(book) {
    this.get('books').removeObject(book);
  },
  includes(book){
    return this.get('books').includes(book)
  },
  getTotal(){
    var total = 0;
    this.get('books').forEach(function(book){
      total += parseInt(book.get('cost'));
    });
    return total;
  }
});
