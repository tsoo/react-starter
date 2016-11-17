define([
  'jquery',
  'views/base'
],
function($, BaseView) {

  var SearchView = BaseView.extend({

    $form: null,

    events: {
      'click .js-search-toggle': 'toggleSearch',
      'click .js-search-close': 'toggleSearch'
    },

    initialize : function() {
      this.$form = this.$el.find($('.js-search-form'));
    },

    toggleSearch: function(e) {
      this.$el.toggleClass('is-open');
      this.$form.toggleClass('active');
      e.stopPropagation();
    }

  });

  return SearchView;
});
