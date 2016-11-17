define([
  'jquery',
  'views/basePage',
  'magnificPopup'
],
function($, BasePageView, MagnificPopup) {

  var PageView = BasePageView.extend({

    initialize: function() {
      BasePageView.prototype.initialize.apply(this, arguments);

      this.initPlugins();
    },

    initPlugins: function() {
      // Initialize lightbox plugin on elements with '.js-image-popup' class.
      this.$el.find('.js-image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: { verticalFit: false }
      });
    }
  });

  return PageView;

});
