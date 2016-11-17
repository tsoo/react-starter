define([
  'jquery',
  'backbone',
  'views/base',
  'config',
  'text!templates/mobileDownloadOverlay/overlay.html',
  'i18n'
  ],
  function ($, Backbone, BaseView, Config, Template, I18n) {

    var MobileDownloadOverlayFormView = BaseView.extend({

      initialize: function (args) {
        this.currentTool = args.currentTool;
      },

      template: Template,

      tagName: 'form',

      className: 'mobile-download__form',

      attributes: {
        role: 'form',
        'aria-labelledby': 'mobile-download__form-heading',
        'aria-describedby': 'mobile-download__form-copy',
        'novalidate': 'novalidate'
      },

      events: {
        'submit': 'emailUser'
      },

      hasErrors: false,

      emailUser: function (e) {
        e.preventDefault();

        var email = this.$el.find('#mobile-download__email-address').val();

        // Keeping validation simple since this is just one field
        // and we have no model
        if (!this.validateEmail(email)) {
          this.renderError(email);
          return;
        }

        $.ajax({
          type: 'POST',
          url: Config.toolDownloadAPIEndpoint,
          data: {
            email: email,
            locale: Config.languageCodeMapping[I18n.locale],
            tool: this.currentTool
          }
        })
          .always(function() {
            Backbone.trigger('signupSuccess', {email: email});
          }.bind(this));

        // Google Analytics tracking successful mobile tool email opt-in
        try {
          window._GA.track(["_trackEvent", "mobile-download-overlay", "successful_opt_in", this.currentTool]);
        } catch (e) {}
      },

      validateEmail: function (email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(email);
      },

      renderError: function (email) {
        this.hasErrors = true;
        this.render();

        var $el = this.$el;
        // Rerendering this view clears the original value,
        // so let's reset it
        var emailAddress = $el.find('#mobile-download__email-address');

        emailAddress.val(email);
        $el.addClass('mobile-download__form-invalid');
        emailAddress.attr('aria-invalid', true);
      },

      serialize: function () {
        return {
          hasErrors: this.hasErrors
        };
      }

    });

    return MobileDownloadOverlayFormView;

  });
