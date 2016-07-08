/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-i18n-lint',

  included: function(app) {
  },

  lintTree: function(type, tree) {
    console.log(this.app.trees)
  }
};
