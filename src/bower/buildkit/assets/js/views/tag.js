define([
  'jquery',
  'underscore',
  'views/base',
  'lib/breakpoints'
],
function($, _, BaseView, Breakpoints) {

  var TagView = BaseView.extend({

    // All images should have the same aspect ratio,
    // so we just look up the dimensions for one of them
    dimensions: {
      w: 0,
      h: 0
    },

    initialize: function() {
      this.setup();

      Breakpoints.on('change', function() {
        this.breakpointChanged();
      }.bind(this));

      $(window).resize(_.throttle(this.windowResized.bind(this), 500));
    },

    breakpointChanged: function() {
      // Count the width of all the containers inside
      switch (Breakpoints.breakpoint) {
      case 'lg':
      case 'md':
      case 'sm-md':
        this.resetBoxScroll();
        this.setBackgroundImages();
        break;
      default:
        this.resetBackgroundImages();
        this.setBoxScroll();
        break;
      }
    },

    windowResized: function() {
      if (Breakpoints.breakpoint !== 'sm') {
        this.updateHeights();
      }
    },

    setBoxScroll: function() {
      var $el = this.$el,
          w = 0;
      $el.find('.js-tag-item').each(function (index, item) {
        w += $(item).outerHeight(true);
      });
      $el.find('.js-tag-box-scroll').css('width', w);
    },

    // Removes the inline width style
    resetBoxScroll: function() {
      this.$el.find('.js-tag-box-scroll').css('width', '');
    },

    // Makes the inline images backgrounds
    setBackgroundImages: function() {
      this.$el.find('.js-tag-item').each(function(index, item) {
        var $item = $(item);
        $item.css('background-image', 'url("' + $item.find('.tag__item__img').attr('src') + '")');
      });
    },

    // Removes the background images (might be unneccessary)
    resetBackgroundImages: function() {
      this.$el.find('.js-tag-item').each(function(index, item) {
        $(item).css({
          'background-image': '',
          height: ''
        });
      });
    },

    // Updates the container heights to maintain aspect ratio for bg iamges
    updateHeights: function() {
      if (Breakpoints.breakpoint !== 'sm') {
        var $el = this.$el,
            $secondaryItems = $el.find('.tag__col--secondary .js-tag-item'),
            w = this.dimensions.w,
            h = this.dimensions.h,
            newWidth = $secondaryItems.first().outerWidth(),
            newHeight = h / w * newWidth;

        // We're also assuming all images have the same dimensions or at the very
        // least, the same aspect ratio.
        $el.find('.tag__col--secondary .js-tag-item').each(function(index, item) {
          $(item).css('height', newHeight);
        });
        $el.find('.tag__col--primary .js-tag-item').css('height', newHeight*2);
      }
    },

    setup: function() {
      var me = this,
          img = new Image();

      img.src = this.$el.find('.js-tag-item .tag__item__img').first().attr('src');
      img.onload = function() {
        var w = this.width,
            h = this.height;
        me.dimensions.w = w;
        me.dimensions.h = h;

        me.breakpointChanged(Breakpoints.breakpoint);
        me.windowResized();
      };
    }
  });

  return TagView;

});
