define([
  'jquery',
  'views/base',
  'lib/breakpoints'
],
function($, BaseView, Breakpoints) {

  var PromoBannerView = BaseView.extend({

    // The element containing the promo banner image, .promo-banner__images
    $container: null,

    initialize: function() {
      this.$container = this.$el.find('.promo-banner__images');

      this.breakpointChanged(Breakpoints.breakpoint);
      Breakpoints.on('change', function(bp) {
        this.breakpointChanged(bp);
      }.bind(this));
    },

    breakpointChanged: function(bp) {
      this.updateImage(bp);
    },

    updateImage: function(bp) {
      var $container = this.$container,
          imgPath = this.getImagePath(bp);

      if (bp.match(/^(sm|sm-md)$/)) {
        $container.css('background-image', 'none');
        // Add an img tag if it doesn't exist already
        if (!$container.find('.promo-banner__img--mobile').length) {
          $container.append('<img class="promo-banner__img--mobile" src="' + imgPath + '" alt="">');
        }
      } else {
        $container.css('background-image', 'url(' + imgPath + ')');
      }
    },

    // Gets the image path based on breakpoint and data-src
    // attributes on the .promo-banner__images element.
    getImagePath: function(bp) {
      var imgPath = this.$container.attr('data-' + (bp.match(/^(sm|sm-md)$/) ? 'sm' : 'lg') + '-src');
      if (imgPath) {
        return imgPath;
      }
      // For backwards compatibility, we check the img tag src if no data attr
      return this.$container.find('.promo-banner__img--' + (bp.match(/^(sm|sm-md)$/) ? 'mobile' : 'cinema')).attr('src');
    },

  });
  return PromoBannerView;
});
