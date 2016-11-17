define(['jquery', 'views/base', 'lib/breakpoints', 'vendor/jquery-ui/ui/minified/position.min'], function ($, BaseView, Breakpoints, ui) {

  var DropdownMenu = BaseView.extend({
    $triggerEl: null,

    initialize: function() {
      this.initTrigger();
      this.breakpointChanged();
      Breakpoints.on('change', function() {
        this.breakpointChanged();
      }.bind(this));

      $(window).on('resize.dropdownMenu', _.throttle(this.windowResized.bind(this), 500));
    },

    initTrigger: function() {
      var $triggerEl = $(this.$el.data('trigger'));

      $triggerEl.click(function(e) {
        var visible = this.$el.is(':visible');
        this.toggle();
        $triggerEl.find('.dropdown-menu-trigger__link').toggleClass('dropdown-menu-trigger__link--active');
        if ( visible || !$triggerEl.find('.js-smooth-scroll').length) {
          // Don't need the smooth scroll, so cancel the default behavior
          e.preventDefault();
          return false;
        }
      }.bind(this));
      this.$triggerEl = $triggerEl;
    },

    breakpointChanged: function() {
      this.position();
    },

    windowResized: function() {
      this.position();
    },

    toggle: function() {
      var $el = this.$el;
      $el.slideToggle('500');
      this.position();
    },

    position: function() {
      var $el = this.$el;
      if (Breakpoints.breakpoint !== 'sm' && $el.is(':visible')) {
        // We use jQuery UI position here
        $el.position({ my: 'top', at: 'bottom+10', of: this.$triggerEl, collision: 'none' });
        // Override the left property jQueryUI ads
        $el.css('left', '');
      } else {
        $el.css('top', '');
      }
    }
  });

  return DropdownMenu;

});
