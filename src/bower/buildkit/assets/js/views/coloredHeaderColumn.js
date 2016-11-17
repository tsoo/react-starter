define([
  'jquery',
  'views/base',
  'lib/breakpoints'
],
function($ ,BaseView, Breakpoints) {

  var ColoredHeaderColumnView = BaseView.extend({

    events: {
      'click .js-expand-trigger': 'triggerClick'
    },

  //-----------------------------------------------------------------------------

    triggerClick: function(e) {
      if(Breakpoints.breakpoint !== 'lg') {
        $(e.currentTarget).parent('.js-expand-wrap').toggleClass('open');
      }
    }

  });

  return ColoredHeaderColumnView;

});
