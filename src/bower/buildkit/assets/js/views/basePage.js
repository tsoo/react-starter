define([
  'jquery',
  'views/base',
  'lib/breakpoints',
  'views/tooltips',
  'lib/featureBitInDOM'
],

function($, BaseView, Breakpoints, Tooltips, FeatureBitInDOM) {
  var $win = $(window);
  var $footerHeight = $('.footer').outerHeight(true);

  var BasePageView = BaseView.extend({

    events: {
      'click a[rel="external"]': 'openExternalWindow',
      'click .js-mobile-nav-toggle': 'mobileNavClick',
      'click .js-smooth-scroll': 'smoothScroll'
    },

    initialize: function() {
      this.loadSVG();
      this.initSubViews();
      new FeatureBitInDOM().update();
      this.initEvents();
      this.setupNav(Breakpoints.breakpoint);
      this.initModernizr();
      this.initToolTips();

      Breakpoints.on('change', function(bp) { this.setupNav(bp); }.bind(this));

      // Using custom events to allow us to trigger initSubViews
      // with a selector
      document.addEventListener('resetModuleView', function(e) {
        this.initSubViews(e.detail.selector);
      }.bind(this));
    },

    initToolTips: function() {
      new Tooltips({
        el: this.el,
        selector: '.js-tooltip-target'
      });
    },

    /*
      Initialize sub-views which are read via
      a 'data-controller' attribute on an element.
      Typically in this application this will always be
      on div#main
    */
    initSubViews: function(selector) {
      var $els = selector ? $(selector) : $('[data-controller]');
      $els.each(function() {
        var $el = $(this);
        require(['views/' + $el.data('controller')], function(View) {
          new View({el: $el});
        });
      });
    },

    initEvents: function() {
      // Set the sticky footer on document ready
      $(function() {
        this.setStickyFooter();
      }.bind(this));

      $win.resize(function() {
        this.setFixedNav();
        this.checkFooterHeight();
      }.bind(this));
    },

    // Custom Modernizr tests
    initModernizr: function() {
      Modernizr.addTest('ios', function() {
        var userAgent = navigator.userAgent;
        // Windows phones can include "iPhone" in their userAgent strings:
        // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
        return /iPad|iPod|iPhone/i.test(userAgent) && !/\bWindows\b/i.test(userAgent);
      });
    },

    setupNav: function(bp) {
      var marginTop = 0;
      if (bp.match(/^(sm|sm-md)$/)) {
        marginTop = ($('.js-utility-list').outerHeight(true) - 78);
      }
      $('.js-controls').css('margin-top', marginTop + 'px');
    },

    openExternalWindow: function(e) {
      window.open($(e.currentTarget).attr('href'));
      e.preventDefault();
    },

    mobileNavClick: function() {
      $('body').toggleClass('nav-open');
    },

    setFixedNav: function() {
      var $nav = $('.js-header--main');
      if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
        $nav.css('position', 'static');
      } else if ($win.scrollTop() > $('.header--utility').height()) {
        $nav.css({ position: 'fixed', top: '0' });
      } else {
        $nav.css('position', 'relative');
      }
    },

    checkFooterHeight: function() {
       var newHeight = $('.js-footer').outerHeight(true);
       if (newHeight !== $footerHeight) {
         $footerHeight = newHeight;
         this.setStickyFooter();
       }
     },

     setStickyFooter: function() {
       var $footer = $('.js-footer');
       if ($footer.length) {
         $footer.css({ bottom: 0, position: 'absolute'});
         $('main').css('padding-bottom', $footerHeight);
       }
     },

    // Scroll smoothly to anchors.
    smoothScroll: function (e) {
      if (e.target.hash) {
        this.smoothScrollTo($(e.target.hash));
      }
    },

    loadSVG: function() {
      // Find unique SVG paths and load them asynchronously
      var svgPaths = [],
          els = document.getElementsByTagName('svg');

      for (var i = 0, len = els.length; i < len; i++) {
        var src = els[i].getAttribute('data-src');
        if (src) {
          src = src.split('#')[0];
          if (svgPaths.indexOf(src) === -1) {
            svgPaths.push(src);
            // Load with ajax
            $.get(src, function(data) {
              var svg = data.documentElement;
              document.body.insertBefore(svg, document.body.childNodes[0]);
              svg.setAttribute('style', 'width:0;height:0;visibility:hidden;position:absolute;');
            });
          }
        }
      }
    }
  });

  return BasePageView;

});
