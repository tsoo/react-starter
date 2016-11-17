define([
  'jquery',
  'underscore',
  'views/base',
  'lib/breakpoints'
],
function($, _, BaseView, Breakpoints) {

  var ProductVisualizerView = BaseView.extend({

    $subnavs: null,
    currentBreakpoint: null,

    events: {
      'click .js-pv-sub-link': 'subItemClick',
      'click .mobile-accordion-trigger': 'mobileAccordion'
    },

    initialize: function() {
      this.currentBreakpoint = Breakpoints.breakpoint;
      this.$subnavs = this.$el.find('.product-visualizer__sub-nav');

      this.updateSubnavItemWidths();

      $(window).resize(_.throttle(this.updateBreakpoint.bind(this), 16));
    },

    deactivateSubItem: function(subLink, subItem) {
      subLink.removeClass('active');
      subItem.removeClass('active');
    },

    activateSubItem: function(subLink, subItem) {
      subLink.addClass('active');
      subItem.addClass('active');
    },

  //-----------------------------------------------------------------------------

    updateSubnavItemWidths: function (event) {
      // Set the width of the subnav items dynamically based on the width of the
      // subnav control.
      this.$subnavs.each(function () {
        var $subnav = $(this);

        // We need the exact width for our calculations.
        // Source: http://stackoverflow.com/questions/11907514/getting-the-actual-floating-point-width-of-an-element
        var containerWidth = $subnav[0].getBoundingClientRect().width;
        //console.log('containerWidth', containerWidth);
        var containerRightMargin = parseFloat($subnav.css('margin-right'));

        var subItemSelector = '.product-visualizer__sub-nav__item';
        var itemCount = $subnav.find(subItemSelector).length;

        // Subtract the left margin per item * number of items from the total
        // width and then divide the container width by number of items (reduced a little to avoid overflows near
        // breakpoints).
        // This is our ideal width.
        var marginLeft = parseFloat($subnav.find(subItemSelector + ':not(.product-visualizer__sub-nav__item--first):not(.product-visualizer__sub-nav__item--last):eq(0)').css('margin-left'));
        var subItemWidth = (containerWidth - (marginLeft * (itemCount - 1))) / itemCount;

        // Bam, set the width.
        $subnav.find(subItemSelector).width(subItemWidth);
      });
    },

    subItemClick: function(e) {
      var subItemLink = $(e.currentTarget);
      var subItemID = $(e.currentTarget).data('id');
      var itemID = $(e.currentTarget).parents('.js-pv-item').data('id');
      this.changeSubItem(itemID, subItemID);
    },

    changeSubItem: function(itemID, subItemID) {
      var newID = itemID;
      var oldSubLink = this.$el.find('.js-pv-item.active .js-pv-sub-link.active');
      var oldSubItem = $('.js-pv-sub-item.active');
      var newSubItem = $('.js-pv-item[data-id="' + itemID + '"] .js-pv-sub-item[data-id="' + subItemID + '"]');
      var subItemLink = $('.js-pv-sub-link[data-id="' + subItemID + '"]');

      // Remove active classes for old item and link
      this.deactivateSubItem(oldSubLink, oldSubItem);

      // Add active classes for new item and link
      this.activateSubItem(subItemLink, newSubItem);
    },

    mobileAccordion: function(event){
      var $item = $(event.target); //cache clicked arrow.
      this.$el.find('.js-pv-sub-item').removeClass('active'); //collapse all sub-items
      if ($item.hasClass('active')) { //if target is cucrrently active, collapse it
        $item.removeClass('active');
        $item.next().removeClass('active');
      }
      else {
        //otherwise remove active from arrows, and expand the one clicked.
        this.$el.find('.mobile-accordion-trigger.active').removeClass('active');
        $item.addClass('active');
        $item.next().addClass('active');
      }
    },

    updateBreakpoint: function(){
      if (Breakpoints.breakpoint !== this.currentBreakpoint){
        if ((this.currentBreakpoint.match(/^(sm|sm-md)$/) && Breakpoints.breakpoint === 'md') ||
          (this.currentBreakpoint === 'md' && Breakpoints.breakpoint.match(/^(sm|sm-md)$/))) {
          this.resetActiveItems();
        }
        this.currentBreakpoint = Breakpoints.breakpoint;
      }

      this.updateSubnavItemWidths();
    },

    resetActiveItems: function(){
      this.$el.find('.js-pv-sub-item').removeClass('active');
      this.$el.find('.mobile-accordion-trigger').removeClass('active');
      this.$el.find('.js-pv-sub-link').removeClass('active');

      this.$el.find('.js-pv-sub-link').first().addClass('active');
      this.$el.find('.js-pv-sub-item').first().addClass('active');
      this.$el.find('.mobile-accordion-trigger').first().addClass('active');
    }

  });


  return ProductVisualizerView;

});
