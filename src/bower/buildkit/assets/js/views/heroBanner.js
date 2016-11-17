define([
  'jquery',
  'underscore',
  'views/base',
  'lib/breakpoints'
],
function($, _, BaseView, Breakpoints) {

  var HeroBannerView = BaseView.extend({

    // The element containing the hero banner image, .hero-banner__container
    $container: null,

    // A secondary banner that appears lower in the page.
    // Maintains the same height for every breakpoint and
    // loses vertical responsiveness
    isSecondaryBanner: false,

    initialize: function() {
      this.$container = this.$el.find('.hero-banner__container');
      this.isSecondaryBanner = this.$el.hasClass('hero-banner--secondary');

      this.breakpointChanged(Breakpoints.breakpoint);
      this.windowResized();

      Breakpoints.on('change', function(bp) {
        this.breakpointChanged(bp);
      }.bind(this));

      $(window).on('resize.heroBanner', _.throttle(this.windowResized.bind(this), 400));
    },

    breakpointChanged: function(bp) {
      this.updateImage(bp);
    },

    windowResized: function() {
      var imgPath = this.getImagePath(Breakpoints.breakpoint);
      this.setImageDimensions(function(img) {
        this.updateHeight(img);
        this.updateBackgroundSize(img);
      }.bind(this), imgPath);
    },

    updateImage: function(bp) {
      var $container = this.$container,
          imgPath = this.getImagePath(bp);
      // Only update the background if needed
      if ($container.css('background-image').indexOf(imgPath) === -1) {
        $container.css('background-image', 'url(' + imgPath + ')');
      }
    },

    updateBackgroundSize: function(img) {
      if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
        this.updateContainerCss({ 'background-size': 'cover' });
        return;
      }

      var w = img.width,
          h = img.height,
          maxWidth = this.$container.outerWidth(),
          maxHeight = h / w * maxWidth,
          displayDims = this.imageDimensionsForDisplay(img),
          minHeight = parseInt(displayDims.height, 10);

      if (maxHeight < minHeight) {
        this.updateContainerCss({ 'background-size': 'cover' });
      } else {
        this.updateContainerCss({ 'background-size': maxWidth + 'px ' + maxHeight + 'px' });
      }
    },

    updateHeight: function(img) {
      var $container = this.$container;

      if (Breakpoints.breakpoint === 'sm') {
        // For the 'sm' breakpoint (mobile layout), we should
        // ensure the full image width and height are visible
        var w = img.width,
            h = img.height,
            newWidth = $container.outerWidth(),
            newHeight = h / w * newWidth;
        this.updateContainerCss({ height: newHeight });
      } else {
        // Add a height for tablet/desktop views
        // to ensure these two maintain the same height.
        // It's a less jarring experience
        var minWidth = $container.outerWidth(),
            // The min height to maintain aspect ratio
            minHeight = img.height / img.width * minWidth,
            displayDims = this.imageDimensionsForDisplay(img);
        if (this.isSecondaryBanner) {
          this.updateContainerCss({ height: displayDims.height });
        } else {
          this.updateContainerCss({ height: (displayDims.width < minWidth) ? minHeight : displayDims.height });
        }
      }
    },

    updateContainerCss: function(options) {
      window.requestAnimationFrame(function() {
        this.$container.css(options);
      }.bind(this));
    },

    // We use the same image for retina/non-retina displays,
    // this returns the dimensions we should use for the user's display
    imageDimensionsForDisplay: function(img) {
      // Images are double the size for retina displays, so
      // divide by half to accommodate non-retina displays
      var h = this.isRetinaDisplay() ? img.height : (img.height/2),
          w = img.width / img.height * h;
      return { width: w, height: h };
    },

    // An array of objects that looks like:
    // { imagePath: imagePath, width: width, height: height }
    imageDimensions: [],

    setImageDimensions: function(callback, imgPath) {
      var imgDims;

      if (imgPath) {
        imgDims = this.imageDimensions.filter(function(x) {
          if (x.imagePath === imgPath) {
            return x;
          }
        });

        if (imgDims.length) {
          callback(imgDims[0]);
        } else {
          var me = this,
              img = new Image();
          img.onload = function() {
            var w = this.width,
                h = this.height;
            imgDims = {
              imagePath: imgPath,
              width: w,
              height: h
            };
            me.imageDimensions.push(imgDims);
            callback(imgDims);
          };
          // Setting source afterwards per
          // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
          img.src = imgPath;
        }
      }
    },

    // Gets the image path based on breakpoint and data-src
    // attributes on the .hero-banner__container element.
    // Per design requirements, we always use the 'lg' image
    // for the 'md' breakpoint
    getImagePath: function(bp) {
      return this.$container.data((bp.match(/^(sm-md|md)$/) ? 'lg' : bp) + '-src');
    },

    isRetinaDisplay: function() {
      if (window.matchMedia) {
        var mq = window.matchMedia(
          'only screen and (min--moz-device-pixel-ratio: 1.3), ' +
          'only screen and (-o-min-device-pixel-ratio: 2.6/2), ' +
          'only screen and (-webkit-min-device-pixel-ratio: 1.3), ' +
          'only screen and (min-device-pixel-ratio: 1.3), ' +
          'only screen and (min-resolution: 1.3dppx)');
        return (mq && mq.matches || (window.devicePixelRatio > 1));
      }
      return false;
    }

  });

  return HeroBannerView;
});
