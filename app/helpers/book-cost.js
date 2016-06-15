import Ember from 'ember';

export function bookCost(params) {
  var bookPrice = params[0].get('cost');

  if (bookPrice >= 10) {
    return "Expensive";
  } else if (bookPrice < 10){
    return "Inexpensive";
  } else {
    return "whatver"
  }
}

export default Ember.Helper.helper(bookCost);
