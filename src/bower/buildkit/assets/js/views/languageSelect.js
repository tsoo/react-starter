define([
  'jquery',
  'views/base'
],
function($, BaseView) {

  var LanguageSelectView = BaseView.extend({

    events: {
      'click .js-lang-select-btn': 'toggleLanguageSelect'
    },

    toggleLanguageSelect: function(e)  {
      $('.js-lang-select-wrap').toggle();
    }

  });

  return LanguageSelectView;

});
