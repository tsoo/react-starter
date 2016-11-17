define([
  'jquery',
  'views/base',
  'lib/breakpoints'
],
function($, BaseView, Breakpoints) {

  var controlsNavView = BaseView.extend({
    // The currently active main navigation item
    activeNavListItem: null,

    navTimeoutId: null,

    events: {
      'mouseenter .controls__nav__list-item' : 'showCurrentSubNav',
      'mouseleave .controls__nav__list-item' : 'restoreActiveSubNav',
      'click .js-parent-nav-link' : 'clickParentNavLink',
      'click .controls__nav__cta__link' : 'cancelNavClickEventForMobile'
    },

    initialize: function() {
      this.activeNavListItem = $('.controls__nav__list-item.active').attr('data-tab');

      // Register our events on the subnav items.
      // These are outside of this view; thus we can't use Backbone events.
      $('.controls__current-subnav').on('mouseenter', function(e) {
        this.cancelNavTimeout();
        this.showCurrentSubNav(e);
      }.bind(this)).on('mouseleave', function() {
        this.restoreActiveSubNav();
      }.bind(this));
    },


  //-----------------------------------------------------------------------------

    showCurrentSubNav: function (e) {
      // No need to show this subnav for mobile
      // (there dup subnav items under .controls__subnav--lvl1)
      if (!this.isMobileNav()) {
        var navListItem = $(e.currentTarget);
        var activeHoverNavListItem = navListItem.data('tab') || navListItem.data('trigger');

        $('.controls__current-subnav.active[data-trigger!=' + activeHoverNavListItem + ']').removeClass('active');
        $('.controls__current-subnav[data-trigger=' + activeHoverNavListItem + ']').addClass('active');

        this.cancelNavTimeout();
      }
    },

    restoreActiveSubNav: function() {
      // This subnav is not shown for mobile
      if (!this.isMobileNav()) {
        this.navTimeoutId = window.setTimeout(function() {
          $('.controls__current-subnav.active[data-trigger!=' + this.activeNavListItem + ']').removeClass('active');
          $('.controls__current-subnav[data-trigger=' + this.activeNavListItem + ']').addClass('active');
        }.bind(this), 1000);
      }
    },

    cancelNavTimeout: function() {
      if (this.navTimeoutId) {
        window.clearTimeout(this.navTimeoutId);
        this.navTimeoutId = null;
      }
    },

    clickParentNavLink: function(e) {
      var navListItem = $(e.currentTarget).closest('.controls__nav__list-item');

      if (this.isMobileNav()) {
        e.preventDefault();
        var subnav = navListItem.find('.js-subnav');
        var subnavItems = subnav.children('li');
        var subnavHeight = 0;

        $('.controls__nav__list-item').removeClass('open');
        $('.js-subnav').css('height', '0');
        $('.footer__legal').css('margin-top', '0')

        /*
         Calculate the height of the subnav based on the height
         of the child list-items.
         */
        subnavItems.each(function() {
          subnavHeight += $(this).outerHeight(true);
        });

        if(subnav.height() === 0) {
          subnav.css('height', subnavHeight);
          $('.footer__legal').css('margin-top', subnavHeight);
          navListItem.addClass('open');
        }
      } else {
        $('.controls__nav__list-item').removeClass('active');
        navListItem.addClass('active');
      }
    },

    /*
     For mobile layouts (tablet/phone), disables nav links
     so they toggle the subnav and do not redirect to a URL.
     This is a workaround (theoretically, clickParentNavLink above
     should do this for us)
     TODO: move .js-parent-nav-link to .controls__nav__cta__link along with the
     expand icon, and move this code into clickParentNavLink. Preferably do it
     when we do WEB-355
    */
    cancelNavClickEventForMobile: function(e) {
      if (this.isMobileNav()) {
        e.preventDefault();
        e.stopPropagation();
        $(e.target).closest('.js-parent-nav-link').trigger('click');
        return false;
      }
    },

    isMobileNav: function() {
      return !!Breakpoints.breakpoint.match(/^(sm|sm-md)$/);
    }
  });

  return controlsNavView;

});
