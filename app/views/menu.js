'use strict';

const template = require('./templates/menu');

module.exports = Mn.View.extend({
  template: template,

  regions: {
    collection: {
      el: 'ul',
      replaceElement: true,
    },
  },
});
