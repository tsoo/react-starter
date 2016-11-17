define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  /*
    Example usage:

      console.log(Breakpoints.breakpoint);

      Breakpoints.on('change', function(size) {
        console.log(size);
      });

  */

  var Breakpoints = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Breakpoints.prototype, Backbone.Events,  {

    breakpoint: 'lg',
    breakpointSizes : { // use the index to dynamically create these.
      '1px':'sm',
      '2px':'sm-md',
      '3px':'md',
      '4px':'lg'
    },

    /*
      Breakpoint configuration to match media queries
      in css.
    */
    breakpointMediaQueries : {
      'sm':'max-width: 749px',
      'sm-md':'min-width: 640px',
      'md':'min-width: 750px',
      'lg':'min-width: 960px'
    },

    elementClass: 'breaker-1232',
    element: null,

    initialize: function() {
      this.initBreakpointTracking();
    },

    initBreakpointTracking: function() {
      this.setElement();
      this.initEvents();
      this.updateBreakpointSize();
    },

    initEvents: function() {
      var resize = _.throttle(
        function() { this.updateBreakpointSize(); }.bind(this)
      , 200);
      $(window).resize(resize);
    },

    setElement: function() {
      if (!this.element) {
        this.element = $('<div class="' + this.elementClass + '"/>');
        $('body').append(this.element);

        var bps = Object.getOwnPropertyNames(this.breakpointMediaQueries);

        // Create the styleblock in head
        var styleEl = '<!-- breakpoint.js styles -->\n';
        styleEl += '<style>';
        for(var size in bps) {
          styleEl += '@media (' + this.breakpointMediaQueries[bps[size]] + '){';
          styleEl += '.' + this.elementClass + ' {';
          styleEl += 'font-size:' + this.getBreakpointSize(bps[size]) + ';}';
          styleEl += '}';
        }
        styleEl += '}</style>';
        $('head').append(styleEl);
      }
    },

    getBreakpointSize: function(size) {
      var sizes = Object.getOwnPropertyNames(this.breakpointSizes);
      for(var bp in sizes) {
        if (size === this.breakpointSizes[sizes[bp]]) {
          return sizes[bp];
        }
      }
    },

    /*
      Returns the breakpoint size the test
      element is currently reporting
    */
    getSizeByElement: function() {
      return this.breakpointSizes[Math.round(this.element.css('font-size').replace('px', '')) + 'px'];
    },

    updateBreakpointSize: function() {
      var size = this.getSizeByElement();
      if (size && size !== this.breakpoint) {
        this.breakpoint = size;
        this.trigger('change', size);
      }
    }

  });

  return new Breakpoints();

});
