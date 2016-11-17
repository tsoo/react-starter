define([
    'jquery',
    'underscore',
    'backbone',
    'views/base',
    'lib/breakpoints',
    'lib/helpers'
  ],

  function ($, _, Backbone, BaseView, Breakpoints, Helpers) {
    var tabSliderView = BaseView.extend({
      $container: null,
      $hasParentAccordionModule: false,

      getActivePanel: function() {
        return this.$container.find('.js-tab-slider-panel[aria-hidden="false"]').first();
      },

      events: {
        'click .js-tab-slider-toggle' : 'toggle'
      },

      initialize: function() {
        var $el = this.$el;
        this.$container = $el.parent();
        this.hasParentAccordionModule = $el.closest('.accordion').length !== 0;

        this.breakpointChanged(Breakpoints.breakpoint);
        this.setActive();

        Breakpoints.on('change', function (bp) {
          this.breakpointChanged(bp);
        }.bind(this));
      },

      setActive: function() {
        var $el = this.$el,
            qs = _.getQueryStringParams(),
            activeSelections = qs['tab-slider'] ? qs['tab-slider'].split(',') : [],
            $closestTab = $el.closest('.js-drawer__header__col');

        if (activeSelections.length > 1) {
          //deep linking for selecting more than 1 option
          if ($closestTab[0].id === qs['tab']) {
            for (i = 0; i < activeSelections.length; i++) {
              var $activeTab = $closestTab.find('#' + activeSelections[i]+ ' .js-tab-slider-toggle'),
                  $tabPanel = this.$container.find($activeTab.attr('href'));
              if($tabPanel.length) {
                this.toggle({ currentTarget: $activeTab[0], preventDefault: function() {} });
              }
            }
          }
        } else {
          // Set an active panel if there isn't one
          var $activeTab = qs['tab-slider'] ? $el.find('#' + qs['tab-slider'] + ' .js-tab-slider-toggle') : [];
          if ($activeTab.length) {
            // Hacky, make it look like an event object
            this.toggle({ currentTarget: $activeTab[0], preventDefault: function() {} });
          }
        }

      },

      breakpointChanged: function(bp) {
        var $container = this.$container;

        if (bp.match(/^(sm|sm-md)$/)) {
          // Show all panels
          $container.find('.js-tab-slider-panel').attr('aria-hidden', 'false');
        } else {
          var $activePanels = $container.find('.js-tab-slider-panel[aria-hidden="false"]');
          if (!$activePanels.length) {
            // Only show the first panel
            var $panels = $container.find('.js-tab-slider-panel'),
                $activePanel = $panels.first();
            this.activateTab($container.find('[href="#' + $activePanel.attr('id') + '"]'), $activePanel);
          } else if ($activePanels.length > 1) {
            // Can happen when switching from mobile to desktop, so only show one
            var $activePanel = $activePanels.first();
            $activePanels.attr('aria-hidden', 'true');
            this.activateTab($container.find('[href="#' + $activePanel.attr('id') + '"]'), $activePanel);
          }
        }
      },

      toggle: function(e) {
        e.preventDefault();
        var $activeTab = $(e.currentTarget),
            $tabPanel = this.$container.find($activeTab.attr('href')),
            $tabCombo = this.$el.closest('.tab-combo'),
            $activePanel = this.getActivePanel();

        if ($tabPanel.attr('id') !== $activePanel.attr('id')) {
          // remove style & class from from all to reset
          $tabCombo.find('.product-highlight--left').css('z-index', 'auto');
          $tabCombo.find('.product-highlight--right, .product-highlight--left .product-highlight__details').css({'display': '', opacity: ''});
          $tabCombo.find('.product-highlight--left .product-highlight--animate__img').removeClass('animate--fade-in--500ms');

          $activePanel.find('.product-highlight--right, .product-highlight--left .product-highlight__details').css({'display': 'none', opacity: 0});
          $tabPanel.find('.product-highlight--right, .product-highlight--left .product-highlight__details').css({'display': 'block', opacity: 1});

          $tabPanel.find('.product-highlight--left').css('z-index', 1);
          $tabPanel.find('.product-highlight--animate__img').addClass('animate--fade-in--500ms');

          // Deactivate any active tabs
          if ($activePanel) {
            window.setTimeout(function() {
              $activePanel.attr('aria-hidden', 'true');
            }, 500);
          }

          $('.js-accordion__tab').removeClass('active');
          $activeTab.closest('.js-accordion__tab').addClass('active');

          // Activate the new selection
          this.activateTab($activeTab, $tabPanel);

          // hide/show recommendation badges without transition on getting-started page
          if ($tabPanel.hasClass('is-recommended')) {
            $tabPanel.find('.product-highlight--left .product-highlight__recommended, .product-highlight--left .icon--recommended').css({'visibility': 'visible'});
          } else {
            $activePanel.find('.product-highlight--left .product-highlight__recommended, .product-highlight--left .icon--recommended').css({'visibility': 'hidden'});
          }

          return false;
        }
      },

      activateTab: function($tab, $tabPanel) {
        // selects the first one by default if nothing passed in the query string
        this.$el.find('.tab-slider__tab--active').removeClass('tab-slider__tab--active');
        $tab.addClass('tab-slider__tab--active');
        $tabPanel.attr('aria-hidden', $tabPanel.attr('aria-hidden') === 'true' ? false : true);
        this.notifyParentModules();
      },

      notifyParentModules: function() {
        // Notify any parent modules that this content has been updated
        if (this.hasParentAccordionModule && this.$el.is(':visible')) {
          window.requestAnimationFrame(function() {
            Backbone.trigger('accordionContentUpdated', this.getActivePanel().outerHeight(true));
          }.bind(this));
        }
      }
    });

    return tabSliderView;
  });
