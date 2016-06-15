import DS from 'ember-data';

export default DS.Model.extend({
  bookName: DS.attr('string'),
  author: DS.attr(),
  cost: DS.attr(),
  description: DS.attr(),
  imgURL: DS.attr(),
});
