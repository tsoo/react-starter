define([
  'jquery',
  'underscore',
  'backbone',
  'i18n'
],
function($, _, Backbone, I18n) {
  var BaseView = Backbone.View.extend({

    template: '',

    render: function() {
      var params = _.extend(this.serialize(), {_:_, $:$, I18n:I18n});

      var template = _.template(this.template);
      this.$el.html(template(params));
      this.trigger('render');
      this.afterRender();

      return this;
    },

    /* !!!! */
    afterRender: function() {},

    serialize: function() {
      return {};
    },

    isDocumentation: function() {
      var $body = $('body');
      return $body.hasClass('documentation') && $body.hasClass('blurb-buildkit');
    },

    // Applies a smooth scroll to a target element
    smoothScrollTo: function($target) {
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top,
          duration: 1000
        });
      }
    }

  });

  return BaseView;

});
