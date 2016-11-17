define([
    'jquery',
    'underscore',
    'backbone',
    'views/base',
    'lib/breakpoints',
    'lib/helpers'
  ],

  function ($, _, Backbone, BaseView, Breakpoints, Helpers) {
    var AccordionView = BaseView.extend({
      events: {
        'click .js-accordion-toggle' : 'toggle'
      },

      initialize: function () {
        this.setActive();

        this.windowResized();
        $(window).resize(_.throttle(this.windowResized.bind(this), 200));

        Backbone.on('tabComboOpened', this.refreshHeights, this);
        Backbone.on('accordionContentUpdated', this.setHeight, this);
      },

      setActive: function() {
        var $el = this.$el,
            qs = _.getQueryStringParams();

        // Set an active panel if there isn't one
        var $activePanel = qs['accordion'] ? $el.find('#' + qs['accordion']) : [];

        if ($activePanel.length) {
          // only set panel for tab in the query string
          if ($activePanel.closest('#'+qs['tab']).length) {
            this.togglePanel($activePanel);
          }
        } else if (!$el.find('.js-accordion-tabpanel:visible').length) {
          this.togglePanel($el.find('.js-accordion-tabpanel').first());
        }
      },

      windowResized: function() {
        this.setHeight();

        var bp = Breakpoints.breakpoint,
            $activeTabPanel = this.$el.find('.js-accordion-tabpanel:visible');
        if (bp.match(/^(sm|sm-md)$/)) {
          // Close the tab if no query string param passed
          var qs = _.getQueryStringParams();
          if (!qs['accordion']) {
            this.togglePanel($activeTabPanel);
          }
        } else if (!$activeTabPanel.length) {
          // Open the first tab
          this.togglePanel(this.$el.find('.js-accordion-tabpanel').first());
        }
      },

      toggle: function(e) {
        e.preventDefault();
        // Hide all panels
        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          this.$el.find('.js-accordion-tabpanel').attr('aria-hidden', true);
        }
        this.togglePanel($(e.currentTarget).siblings('.js-accordion-tabpanel'));
      },

      togglePanel: function($tabPanel) {
        $tabPanel.attr('aria-hidden', $tabPanel.is(':visible'));
        // Notify any parent drawers that this content has been updated
        this.setHeight();
      },

      setHeight: function(childHeight) {
        var h = this.refreshHeights(childHeight);

        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/) && this.$el.is(':visible')) {
          // Notify any parent drawers that this content has been updated
          window.requestAnimationFrame(function() {
            Backbone.trigger('tabComboContentUpdated', this.$el.closest('.js-drawer__header__col.active'), h);
          }.bind(this));
        }
      },

      refreshHeights: function(childHeight) {
        if (!this.$el.is(':visible')) {
          return;
        }

        var $el = this.$el,
            h = 0;

        if (!Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
          if (!childHeight) {
            childHeight = this.getChildHeight();
          }
          // Would like to use a `.js-` selector, but need this for backwards compatibility
          h = Math.max($el.find('.accordion__box').outerHeight(true), childHeight);
          if (h > 0) {
            $el.css('height', h);
          }
        } else {
          $el.css('height', '');
        }

        return h;
      },

      // Children for this element need to be positioned absolutely;
      // thus elements are not part of the normal document flow.
      // We need to calcuate the height for each.
      getChildHeight: function() {
        var $tabSliderPanel = this.$el.find('.tab-slider__panel:visible');
        // If there's an embedded tab-slider module, then get the height for that
        return $tabSliderPanel.length ? $tabSliderPanel.outerHeight(true) : 0;
      }
    });

    return AccordionView;
  });
