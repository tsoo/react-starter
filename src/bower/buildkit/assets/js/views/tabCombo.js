define([
    'jquery',
    'backbone',
    'views/base',
    'lib/breakpoints',
    'lib/helpers'
  ],

  function($, Backbone, BaseView, Breakpoints, Helpers) {
    var TabComboView = BaseView.extend({

      // The last viewed drawer
      activeDrawerHeader: null,
      // Allows us to change the behavior for modules that
      // extend this view. Eventually we can add a way for the
      // content team to specify this setting from a data-options
      // attribute.
      openAllTabsForMobile: true,

      // Disables the smooth scroll effect that occurs when you click on a tab
      disableScrollToTab: false,

      events: {
        'click .js-drawer__content' : 'clickTab'
      },

      initialize: function() {
        this.setupOptions();
        this.setActiveTab();

        this.activeDrawerHeader = this.$el.find('.js-drawer__header__col.active');
        this.breakpointChanged(Breakpoints.breakpoint);
        Breakpoints.on('change', function(bp) {
          this.breakpointChanged(bp);
        }.bind(this));

        $(window).resize(_.throttle(this.positionSlider.bind(this), 400));

        // We have overflow: hidden for open modules to prevent the
        // jarring effect while the container is resized,
        // set this back to overflow: visible
        this.$el.css('overflow', 'visible');

        Backbone.on('tabComboContentUpdated', this.setHeight, this);
      },

      setupOptions: function() {
        var options = this.$el.data('options');
        if (!options) {
          return;
        }

        this.disableScrollToTab = (/disableScrollToTab:true/i.test(options));
      },

      setActiveTab: function() {
        var $el = this.$el,
            qs = _.getQueryStringParams();

        // If the query string includes an active tab combo param,
        // override the active tab with this
        var $activeTab = qs['tab'] ? $el.find('#' + qs['tab']) : [];
        if ($activeTab.length) {
          // Remove the active class and re-add it to the tab passed via the
          // query string
          $el.find('.js-drawer__header__col.active').removeClass('active');
          $activeTab.addClass('active');
        }
      },

      clickTab: function(e) {
        // Need this to happen before we trigger tabComboOpened
        $(e.currentTarget).parent().addClass('active');
        // Trigger an event to update the accordion/tab-slider heights
        window.requestAnimationFrame(function() {
          Backbone.trigger('tabComboOpened');
          this.openTab(e);
        }.bind(this));
      },

      breakpointChanged: function(bp) {
        // If user switched from the mobile to desktop view,
        // only show one open drawer
        this.deselectHeaderColumn();

        if (!bp.match(/^(sm|sm-md)$/)) {
          var $el = this.$el;
          // Both selectors included for backwards compatibility
          $el.find('.js-drawer__toggled-content').css('height', '');
          this.activeDrawerHeader = this.activeDrawerHeader || $el.find('.js-drawer__header__col').first();
          this.activeDrawerHeader.addClass('active');
        } else if (this.openAllTabsForMobile) {
          this.openAllTabs();
        }
        this.setHeight(this.activeDrawerHeader);
      },

      openAllTabs: function() {
        this.$el.find('.js-drawer__header__col').addClass('active');
      },

      deselectHeaderColumn: function() {
        this.$el.find('.js-drawer__header__col.active').removeClass('active');
      },

      openTab: function(e) {
        var $target = $(e.currentTarget),
            drawerHeader = $target.parent();

        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          this.deselectHeaderColumn();
        }

        drawerHeader.addClass('active');
        this.setHeight(drawerHeader);

        // don't want scroll enabled on the dropdown or new layout menu page
        if (!this.disableScrollToTab) {
          var $scrollToEl = Breakpoints.breakpoint.match(/^(sm|sm-md)$/) ? $target : this.$el.find('.js-tab-combo__option__head');
          this.smoothScrollTo($scrollToEl);
        }

        // Update the active selection
        this.activeDrawerHeader = drawerHeader;
      },

      setHeight: function($drawerHeader, totalHeight) {
        if (!$drawerHeader) {
          $drawerHeader = this.$el.find('.js-drawer__header__col.active');
          // Still no active drawer header, just return
          if (!$drawerHeader.length) {
            return;
          }
        }

        var $el = this.$el,
          drawerToggledContent = $drawerHeader.find('.js-drawer__toggled-content');
        totalHeight = totalHeight || 0;

        if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          drawerToggledContent.css('height', 'auto');
          $el.css('height', 'auto');
        } else {
          // need to set the height differently for the getting-started page in website
          // since we had to change the mark up for the tab-combo module
          if ($('.page-getting-started').length && $('.product-highlight--right--summary:visible').length) {
            var summaryHeight = drawerToggledContent.find('.product-highlight--right--summary').outerHeight();
            // adding padding for when feature bit is off for getting-started page
            totalHeight = Math.max(summaryHeight, totalHeight) + 100;
          } else if (!totalHeight) {
            // Calculate the height of all the children in the toggle container
            drawerToggledContent.children().each(function() {
              totalHeight += $(this).outerHeight();
            });
          }

          // Respect any margins on our toggle content container
          totalHeight += parseInt(drawerToggledContent.css('margin-top'), 0) +
            parseInt(drawerToggledContent.css('margin-bottom'), 0);

          // For backwards compatibility
          var $container = $el.find('.js-drawer-container');
          if (!$container.length) {
            $container = $el.find('.grid-construct-x').eq(0);
          }
          $el.css('height', $container.outerHeight() + totalHeight);
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
      }
    });

    return TabComboView;
  });
