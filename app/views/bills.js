'use strict';

const BillItemView = require('./bill_item');
const template = require('./templates/bills');

const BillsView = Mn.CollectionView.extend({
  tagName: 'ul',
  childView: BillItemView,
});

module.exports = Mn.View.extend({
  template: template,

  regions: {
    collection: {
      el: 'ul',
      replaceElement: true,
    },
  },

  initialize: function () {
  },

  onRender: function () {
    this.showChildView('collection', new BillsView({ collection: this.collection }));
  },

});
