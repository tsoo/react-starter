define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'config',
  'text!templates/emailSignup/form.html',
  'i18n',
  'lib/featureBit'
],
function($, _, Backbone, BaseView, Config, Template, I18n, FeatureBit) {

  var EmailSignupFormView = BaseView.extend({

    template: Template,

    tagName: 'form',

    className: 'email-signup__form',

    attributes: {
      role: 'form',
      'aria-labelledby': 'email-signup__form-heading',
      'aria-describedby': 'email-signup__form-copy',
      'novalidate': 'novalidate'
    },

    events: {
      'submit': 'optInUser'
    },

    hasErrors: false,

    optInUser: function(e) {
      e.preventDefault();

      var email = this.$el.find('#email_signup__address').val();

      // Keeping validation simple since this is just one field
      // and we have no model
      if (!this.validateEmail(email)) {
        this.renderError(email);
        return;
      }

      $.ajax({
          type: 'POST',
          url: Config.newsletterOptInAPIEndpoint,
          data: {
            email: email,
            locale: Config.languageCodeMapping[I18n.locale],
            email_signup_source: 'buildkit_email_signup_form=' + location.pathname
          }
        })
        .always(function() {
          Backbone.trigger('signupSuccess');
        }.bind(this));
    },

    validateEmail: function(email) {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(email);
    },

    renderError: function(email) {
      this.hasErrors = true;
      this.render();

      var $el = this.$el;
      // Rerendering this view clears the original value,
      // so let's reset it
      $el.find('#email_signup__address').val(email);
      $el.addClass('email_signup__form-invalid');
      $('#email_signup__address').attr('aria-invalid', true);
    },

    serialize: function() {
      return {
        hasErrors: this.hasErrors
      };
    }

  });

  return EmailSignupFormView;

});
