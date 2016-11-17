define([
  'jquery',
  'views/base',
  'config',
  'lib/helpers',
  'lib/featureBit'
],

function ($, BaseView, Config, Helpers, FeatureBit) {
  var DropdownModal = BaseView.extend({

    events: {
      'click': 'handleClick'
    },

    // There might multiple dropdown modals on the page, record the order
    // of this element, so we can parse the hash correctly (has should
    // reflect order of dropdowns on the page)
    index: 0,

    initialize: function() {
      // Calculate width & height of selected option item
      this.updateHeaderDimensions();
      // Position selected option item with a negative transformY
      this.position();
      // Figure out the index of this module
      this.setIndex();
      // Update dropdown selections based on hash
      this.updateDropdown();
    },

    setIndex: function() {
      $('.js-dropdown-modal-list').each(function(index, item) {
        if (item === this.el) {
          this.index = index;
          return false;
        }
      }.bind(this));
    },

    updateDropdown: function() {
      var values = window.location.hash.replace(/^(#\/|#)/, '').split('/');
      if (values.length && values.length > this.index) {
        var $item = this.$el.find('.dropdown-modal__options__item[value="'+ values[this.index] +'"]');
        if ($item.length) {
          this.select($item)
        }
      }
    },

    handleClick: function(e) {
      if (!this.isOpen()) {
        this.open(e);
      } else if ($(e.target).hasClass('js-dropdown-modal-list-options-item')) {
        this.select($(e.target));
        this.updateHash();
      } else if ($(e.target).hasClass('js-dropdown-modal-list-overlay') || $(e.target).hasClass('js-dropdown-modal-list-options')) {
        this.close();
      }
      e.preventDefault();
    },

    position: function() {
      var moveUp = 0,
          $el = this.$el;

      if (!this.isOpen()) {
        $el.find('.dropdown-modal__options__item').each(function(index, item) {
          var $item = $(item);
          if (!$item.hasClass('dropdown-modal__options__item--is-selected')) {
            var h = $item.outerHeight(true);
            if (!h) {
              // Must be hidden
              h = _.getHiddenDimensions($item, true).outerHeight;
            }
            moveUp += h;
          } else {
            return false;
          }
        });
        moveUp = (moveUp * -1) + 'px';
      } else {
        // Center the options list vertically over the dropdown,
        // but within the viewport
        var $options = $el.find('.dropdown-modal__options'),
            offset = $el.offset(),
            h = $options.outerHeight(true),
            centeredHeight = (h / 2 - ($el.outerHeight(true) / 2)) * -1,
            extraPadding = 50;
        if (0 < (offset.top + centeredHeight - extraPadding)) {
          moveUp = centeredHeight + 'px';
        } else {
          // Nudge the modal down so othat it's visible within the viewport
          // with 50px padding at the top
          moveUp = (offset.top + centeredHeight) * -1 + centeredHeight + extraPadding + 'px';
        }
      }
      $el.find('.dropdown-modal__options').css('transform', 'translateY(' + moveUp + ')');
    },

    isOpen: function(e) {
      return this.$el.hasClass('dropdown-modal__list--is-open');
    },

    select: function($item) {
      this.$el.find('.dropdown-modal__options__item--is-selected').removeClass('dropdown-modal__options__item--is-selected');
      var val = $item.closest('.dropdown-modal__options__item').addClass('dropdown-modal__options__item--is-selected').attr('value');
      this.close();

      // Trigger event
      _.dispatchCustomEvent('dropdownModalChanged', { value: val }, this.el);
    },

    updateHash: function() {
      // Update the URL hash take into account other modals on the page)
      var hash = '#';
      $('.js-dropdown-modal-list').each(function(index, item) {
        // Build out hash
        hash += '/' + $(item).find('.dropdown-modal__options__item--is-selected').attr('value');
      });
      window.location.hash = hash;
    },

    open: function(e) {
      $(e.currentTarget).addClass('dropdown-modal__list--is-open');
      this.position();
    },

    close: function() {
      this.$el.removeClass('dropdown-modal__list--is-open');
      this.updateHeaderDimensions();
      this.position();
    },

    updateHeaderDimensions: function() {
      window.requestAnimationFrame(function() {
        var $el = this.$el,
            $selectedItem = $el.find('.dropdown-modal__options__item--is-selected');
        if (!$selectedItem.length) {
          $selectedItem = $el.find('.dropdown-modal__options__item').first().addClass('dropdown-modal__options__item--is-selected');
        }

        // The height is off by 1px
        var h = $selectedItem.outerHeight(true),
            w = $selectedItem.outerWidth(true);
        if (!h) {
          // If the element is hidden, we won't get the right dimensions.
          var dims = _.getHiddenDimensions($selectedItem, true);
          h = dims.outerHeight;
          w = dims.outerWidth;
        }

        if (h && w) {
          // Add a few extra pixels as we're not getting the right height & width,
          // possibly due to elements floating.
          h += 1;
          $el.css({
            height: h,
            width: w + 5
          });
          $el.siblings('.js-dropdown-modal-list-heading').css('height', h);
        }
      }.bind(this));
    }

  });

  return DropdownModal;

});
