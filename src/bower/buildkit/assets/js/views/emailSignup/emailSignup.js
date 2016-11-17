define([
  'jquery',
  'jqueryCookie',
  'underscore',
  'backbone',
  'views/base',
  'lib/breakpoints',
  'config',
  'views/emailSignup/emailSignupForm',
  'views/emailSignup/emailSignupSuccess'
],
function($, jqueryCookie, _, Backbone, BaseView, Breakpoints, Config, EmailSignupFormView, EmailSignupSuccessView) {

  var EmailSignupView = BaseView.extend({

    events: {
      'click .email-signup__btn-close' : 'hideView'
    },

    initialize: function() {
      // Check cookies to determine if we should show this view at all.
      // 'dm' is set on blurby
      // per WEB-844, will show on en, en-ca & en-au homepages until
      // a permanent solution is found for all locales

      var dmCookie = $.cookie('dm'),
          showOnHomepage = ['en', 'en-ca', 'en-au'].indexOf(I18n.locale);


      if (!this.isDocumentation() &&
          ($.cookie('hideEmailSignup') === '1' ||
          (dmCookie && ($.parseJSON(dmCookie)).username)) ||
          ($('.page-homepage').length && showOnHomepage)) {
        this.remove();
        return;
      }

      this.renderForm();
    },

    renderForm: function() {
      Backbone.on('signupSuccess', this.renderSuccess, this);

      var view = new EmailSignupFormView();
      this.$el.find('.email-signup__content').append(view.render().el);

      this.toggleView(Breakpoints.breakpoint);
      Breakpoints.on('change', function(size) {
        this.toggleView(size);
      }.bind(this));
    },

    /*
      Adds/removes a margin on the body tag and toggles the view.
      The margin ensures the email sign up container doesn't cover
      any footers when the user scrolls all the way down.
     */
    toggleView: function(breakpoint) {
      if (breakpoint === 'lg') {
        var el = this.el;
        el.style.display = 'block';
        // Force a DOM repaint so we can get an accurate height
        el.offsetHeight;
        window.requestAnimationFrame(function() {
          $('.js-inner-wrapper').css('margin-bottom', this.getHeight());
        }.bind(this));
      } else {
        $('.js-inner-wrapper').css('margin-bottom', '0');
        this.el.style.display = 'none';
      }
    },

    getHeight: function() {
      return this.$el.outerHeight(false) + 'px';
    },

    renderSuccess: function() {
      // Hardcode the height with an inline style to
      // ensure the height of the container doesn't change
      // with the "thank you" message, which is shorter
      this.$el.css('min-height', this.getHeight());

      var view = new EmailSignupSuccessView(),
          $content = this.$el.find('.email-signup__content');
      $content.empty();
      $content.append(view.render().el);

      // Write a cookie that expires a year from now
      // to not show this again
      $.cookie('hideEmailSignup', 1, { expires: 365 });

      // Hide the views in 5s
      this.$el.addClass('email-signup--slow-transition');
      window.setTimeout(function() { this.hideView(); }.bind(this), 5000);
    },

    hideView: function(e) {
      // Fade out the views
      this.$el.css('opacity', 0);
      window.setTimeout(function() {
        this.remove();
        // Undo the margin-bottom we added above
        $('.js-inner-wrapper').css('margin-bottom', 0);
      }.bind(this), 2000);

      if (e !== undefined) {
        // Write a session cookie if this method
        // was triggered by a button click event
        // [by the user]
        $.cookie('hideEmailSignup', 1);
      }
    }

  });

  return EmailSignupView;
});
