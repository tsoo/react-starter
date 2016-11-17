define([
    'jquery',
    'views/base',
    'qtip2',
    'lib/breakpoints'
  ],
  function ($, BaseView, Qtip2, Breakpoints) {

    var TooltipsView = BaseView.extend({

      initialize: function (options) {
        this.initToolTips(options.selector);
      },

      initToolTips: function (selector) {
        this.$el.find(selector).each(function (i, el) {
          var $el = $(el);
          var tooltip_text = null;
          if ($el.siblings('.js-tooltip-text').length) {
            tooltip_text = $el.siblings('.js-tooltip-text');
          } else {
            tooltip_text = $el.children('.js-tooltip-text');
          }
          if (Breakpoints.breakpoint.match(/^(sm|sm-md)$/)) {
            $el.qtip({
              show: {
                event: 'click mouseenter',
                solo: true
              },
              hide: {
                event: 'click unfocus',
                delay: 1000,
                target: $el
              },
              content: {
                text: tooltip_text
              },
              adjust: {
                resize: true // Can be ommited (e.g. default behaviour)
              },
              position: {
                at: 'bottom right',
                viewport: true
              }
            });
          } else {
            $el.qtip({
              show: {
                event: 'click mouseenter',
                solo: true
              },
              hide: {
                event: 'click unfocus',
                delay: 1000,
                target: $el
              },
              content: {
                text: tooltip_text
              },
              adjust: {
                resize: true // Can be ommited (e.g. default behaviour)
              },
              position: {
                at: 'bottom right',
                viewport: $(window)
              }
            });
          }
        });
      }
    });
    return TooltipsView;

  });
