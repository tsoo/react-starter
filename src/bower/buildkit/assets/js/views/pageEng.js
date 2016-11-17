define([
  'jquery',
  'underscore',
  'backbone',
  'views/basePage',
  'lib/breakpoints',
  'views/tooltips'
],
function($, _, Backbone, BasePageView, Breakpoints, Tooltips) {

  var PageEngView = BasePageView.extend({

    initialize: function() {
      BasePageView.prototype.initialize.apply(this, arguments);
    }

  });

  return PageEngView;

});
