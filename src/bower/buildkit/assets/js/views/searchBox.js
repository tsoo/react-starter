define([
  'views/base',
  'jquery'
],
function(BaseView, $) {

  var SearchBox = BaseView.extend({

    events: {
      'click .js-search-box-submit' : 'expandOrSubmit',
      'focus .js-search-box-text' : 'expand',
      'blur .js-search-box-text' : 'contract'
    },

    expandOrSubmit: function(e) {
      var $searchTextInput = this.$el.find('.js-search-box-text');
      if ($searchTextInput.val()) {
        this.expand();
        return true; // Submit
      } else {
        e.preventDefault();
        $searchTextInput.focus();
        return false;
      }
    },

    expand: function() {
      this.$el.addClass('search-box--is-active');
    },

    contract: function(e) {
      var originalTarget = e.relatedTarget || (e.originalEvent && e.originalEvent.explicitOriginalTarget);
      if (!$(originalTarget).hasClass('js-search-box-submit')) {
        this.$el.removeClass('search-box--is-active');
      }
    }

  });

  return SearchBox;

});
