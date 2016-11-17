define([
  'jquery',
  'views/base',
  'lib/breakpoints'
],
function($, BaseView, Breakpoints) {

  var BannerModalView = BaseView.extend({
    showToLocale: true,

    events: {
      'click .js-banner-modal-btn-close' : 'hideView'
    },

    initialize: function() {
      this.setupOptions();

      if (!this.isDocumentation() && (this.userHasSeenModal() || !this.showToLocale)) {
        this.remove();
      } else {
        this.render();
      }
    },

    setupOptions: function() {
      var dataOptions = this.$el.data('options');
      if (!dataOptions) {
        return;
      }

      dataOptions.split(';').forEach(function(option) {
        if (option) {
          var optionParts = option.split(':');
          switch (optionParts[0]) {
            case 'showToLocales':
              if (Blurb.locale) {
                this.showToLocale = optionParts[1].match(new RegExp('\\b' + Blurb.locale + '\\b', 'i'));
              }
              break;
          }
        }
      }.bind(this));
    },

    userHasSeenModal: function() {
      // Check localStorage to determine if we should show this view at all.
      var localStorageItem = $.parseJSON(window.localStorage.getItem(this.$el.attr('id')));
      return localStorageItem && localStorageItem.expires && localStorageItem.expires > Date.now();
    },

    render: function() {
      this.toggleView();
      Breakpoints.on('change', function() {
        this.toggleView();
      }.bind(this));
    },

    /*
      Adds/removes a margin on the wrapper and toggles the view.
      The margin ensures this container doesn't cover any footers
      when the user scrolls all the way down.
     */
    toggleView: function() {
      $('.js-inner-wrapper').css('margin-bottom', this.getHeight());
      this.$el.show();
    },

    getHeight: function() {
      return this.$el.outerHeight(false) + 'px';
    },

    hideView: function() {
      // Fade out the views
      this.$el.css('opacity', 0);
      window.setTimeout(function() {
        this.remove();
        // Undo the margin-bottom we added above
        $('.js-inner-wrapper').css('margin-bottom', 0);
      }.bind(this), 2000);

      this.writeToLocalStorage();
    },

    writeToLocalStorage: function() {
      // Write a value to localStorage to not show this again
      try {
        var currentDate = new Date(),
            expires = currentDate.setMonth(currentDate.getMonth() + 13);
        window.localStorage.setItem(this.$el.attr('id'), '{"expires":' + expires + ',"value":1}');
      } catch(err) { }
    }

  });

  return BannerModalView;
});
