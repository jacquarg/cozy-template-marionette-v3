'use-strict';

const template = require('views/templates/app_layout');
const MessageView = require('views/message');
const MenuView = require('views/menu');
const BillsView = require('views/bills');

module.exports = Mn.View.extend({
  template: template,
  el: '[role="application"]',
  behaviors: {},

  regions: {
    message: '.message',
    main: 'main',
    menu: 'aside',
  },

  onRender: function () {
    this.showChildView('menu', new MenuView({ collection: app.vendors }));
    this.showChildView('main', new BillsView({ colleciton: app.bills }));
    this.showChildView('message', new MessageView());
  },
});
