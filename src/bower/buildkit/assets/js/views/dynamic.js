define([ 'jquery', 'views/base', 'lib/breakpoints' ],
function($, BaseView, Breakpoints) {

  var Dynamic = BaseView.extend({

    // The content container.
    $box: null,
    // The mobile image.
    $img: null,
    // The content container for text.
    $textContent: null,

    initialize: function() {
      this.$box = this.$el.find('.js-dynamic-box');
      this.$img = this.$el.find('.js-dynamic-img-mobile');
      this.$textContent = this.$el.find('.js-dynamic-content');

      this.updateImageSource();

      Breakpoints.on('change', function() { this.updateImageSource(); }.bind(this));
      $(window).resize(_.throttle(this.updateHeight.bind(this), 250));
    },

    /**
     Updates the image position for mobile to ensure elements do not overlap.
     */
    updateHeight: function() {
      window.requestAnimationFrame(function() {
        if (this.isMobile()) {
          // Position the main image if it overlaps with an adjacent sibling
          var imgPosTop = this.$img.position().top,
              $sibling = this.$textContent,
              siblingPosTop = $sibling.outerHeight(true) + $sibling.position().top;

          if (siblingPosTop > imgPosTop) {
            this.$img.css('bottom', (imgPosTop - siblingPosTop));
          }
        } else {
          var $contentDesktop = this.$box.find('.js-dynamic-content-desktop');
          // Add a height to the content columns to vertically align the image.
          var h = Math.max(this.$textContent.height(), $contentDesktop.height());
          $contentDesktop.css('height', h);

          var $desktopImg = this.$box.find('.js-dynamic-img-desktop');
          if ($desktopImg.length && !$desktopImg.hasClass('dynamic__img--desktop--bottom')) {
            // This CSS is applied with JS to avoid the jarring effect that occurs
            // before the height is set on the container.
            $desktopImg.css({
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)'
            });
          }
        }
      }.bind(this));
    },

    /**
     Updates the image source if it doesn't match the one intended for the
     breakpoint.
     */
    updateImageSource: function() {
      var $img = this.$img,
          src = this.isMobile() ? $img.data('sm-src') : $img.data('lg-src');
      if (!$img.attr('src') || $img.attr('src').indexOf(src) === -1) {
        $img.attr('src', src);
      }
      this.updateHeight();
    },

    isMobile: function() {
      return Breakpoints.breakpoint.match(/^(sm-md|sm)$/);
    }

  });

  return Dynamic;

});
