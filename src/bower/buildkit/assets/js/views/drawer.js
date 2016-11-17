define([
  'jquery',
  'backbone',
  'views/base',
  'lib/breakpoints'
],

  function($, Backbone, BaseView, Breakpoints) {
    var DrawerView = BaseView.extend({
      // The last viewed drawer
      activeDrawerHeader: null,
      // Allows us to change the behavior for modules that
      // extend this view. Eventually we can add a way for the
      // content team to specify this setting from a data-options
      // attribute.
      openAllDrawersForMobile: false,

      events: {
        'click .js-drawer__content' : 'selectDrawer',
        'click .js-tab-changer' : 'hashChanged'
      },

      initialize: function() {
        this.activeDrawerHeader = this.$el.find('.js-drawer__header__col.active');
        this.breakpointChanged(Breakpoints.breakpoint);

        Breakpoints.on('change', function(bp) {
          this.breakpointChanged(bp);
        }.bind(this));
        $(window).resize(_.throttle(this.positionSlider.bind(this), 400));
        $(window).on('scroll', _.throttle(this.scrollDrawer.bind(this), 250));

        this.setupOptions();

        // We have overflow: hidden for open modules to prevent the
        // jarring effect while the container is resized,
        // set this back to overflow: visible
        this.$el.css('overflow', 'visible');
        // Set to -1000px in CSS to prevent jarring effect
        this.$el.find('.js-drawer__toggled-content').css('bottom', 0);
      },

      breakpointChanged: function(bp) {
        // If user switched from the mobile to desktop view,
        // only show one open drawer
        this.deselectHeaderColumn();

        if (!bp.match(/^(sm|sm-md)$/)) {
          var $el = this.$el;
          $el.find('.js-drawer__toggled-content').css('height', '');
          this.activeDrawerHeader = this.activeDrawerHeader || $el.find('.js-drawer__header__col').first();
          this.activeDrawerHeader.addClass('active');
        } else if (this.openAllDrawersForMobile) {
          this.openAllDrawers();
        }
        this.setHeight(this.activeDrawerHeader);
      },

      setupOptions: function() {
        var dataOptions = this.$el.data('options');
        if (!dataOptions) {
          return;
        }

        if (!(/enableTabLinking:true/i.test(dataOptions))) {
          window.addEventListener('hashchange', this.hashChanged.bind(this), false);
        }
      },

      openAllDrawers: function() {
        this.$el.find('.js-drawer__header__col').addClass('active');
      },

      deselectHeaderColumn: function() {
        this.$el.find('.js-drawer__header__col.active').removeClass('active');
      },

      selectDrawer: function(e, targetDrawer) {
        if (!targetDrawer)  {
          targetDrawer = $(e.currentTarget).parent();
        }

        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          this.deselectHeaderColumn();
        }

        targetDrawer.toggleClass('active');
        this.setHeight(targetDrawer);
        if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          this.smoothScrollTo($(e.currentTarget));
        }

        // Update the active selection
        this.activeDrawerHeader = targetDrawer;
      },

      hashChanged: function(e) {
        this.selectDrawer(e, $(location.hash));
      },

      scrollDrawer: function() {
        var drawerHeaders = this.$el.find('.js-drawer__content .drawer__title');
        var slider = this.$el.find('.js-drawer-slider');
        this._resetHeaders(drawerHeaders, slider);
        if(this._useStickyHeader()) {
          if(this._drawerInViewport(drawerHeaders)) {
            this._makeHeaderSticky(drawerHeaders, slider);
          }
          this.positionSlider();
        }
      },

      setHeight: function($drawerHeader) {
        if (!$drawerHeader) {
          $drawerHeader = this.$el.find('.js-drawer__header__col.active');
          // Still no active drawer header, just return
          if (!$drawerHeader.length) {
            return;
          }
        }

        var $el = this.$el,
            $drawerToggledContent = $drawerHeader.find('.js-drawer__toggled-content');

        if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          $drawerToggledContent.css('height', 'auto');
          $el.css('height', 'auto');
        } else {
          // Calculate the height of children in the toggle container
          var totalHeight = $drawerToggledContent.outerHeight(true);
          var $container = $el.find('.js-drawer-container');
          $el.css('height', $container.outerHeight(true) + totalHeight);
          this.positionSlider();
        }
      },

      positionSlider: function() {
        var $el = this.$el,
            $drawerHeader = $el.find('.js-drawer__header__col.active');
        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/) && $drawerHeader.length) {
          $el.find('.js-drawer-slider').css({
            left: $drawerHeader.position().left,
            width: $drawerHeader.outerWidth()
          });
        }
      },

      _useStickyHeader: function() {
        return Breakpoints.breakpoint.match(/^(sm|sm-md|md)$/) && this.$el.hasClass('js-drawer-sticky-header');
      },

      _drawerInViewport: function(drawerHeaders) {
        var topOfHeaderText = drawerHeaders.offset().top;
        var topOfWindow = $(window).scrollTop();
        var bottomOfEl = this.$el.height() + this.$el.position().top;
        return topOfWindow >= topOfHeaderText && bottomOfEl > topOfWindow;
      },

      _resetHeaders: function(drawerHeaders, slider) {
        drawerHeaders.removeAttr('style');
        drawerHeaders.removeClass('drawer__content--sticky');
        slider.removeClass('drawer__content--sticky');
        this.$el.find('.js-drawer-header-background').hide();
      },

      _makeHeaderSticky: function(drawerHeaders, slider) {
        var headerWidth = drawerHeaders.outerWidth();
        drawerHeaders.css({width: headerWidth});
        drawerHeaders.addClass('drawer__content--sticky');
        slider.css({top: drawerHeaders.outerHeight()});
        slider.addClass('drawer__content--sticky');
        this.$el.find('.js-drawer-header-background').css({
          height: slider.height() + drawerHeaders.outerHeight() + 3
        });
        this.$el.find('.js-drawer-header-background').show();
      }
    });
    return DrawerView;
  });
