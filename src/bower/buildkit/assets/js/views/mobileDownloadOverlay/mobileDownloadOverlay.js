define([
  'jquery',
  'backbone',
  'views/base',
  'views/mobileDownloadOverlay/mobileDownloadOverlayForm',
  'views/mobileDownloadOverlay/mobileDownloadOverlayConfirmation'
],
  function ($, Backbone, BaseView, MobileDownloadOverlayFormView, MobileDownloadOverlayConfirmationView) {

    var mobileDownloadOverlayView = BaseView.extend({
      events: {
        'click .mobile-download__btn-close' : 'hideView'
      },
      // bookwright, booksmart, indesign, bookify, or pdf
      currentTool: null,
      initialize: function () {
        this.overrideClickForButtons();
      },
      overrideClickForButtons: function () {
        var isMobile = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
        };

        if (isMobile.any()) {
          $('.js-mobile-download__btn').on('click', function (e) {
            this.$el.css({
              display: 'block',
              opacity: 1
            });
            this.currentTool = $(e.currentTarget).data('tool');
            this.renderForm();
            e.preventDefault();
          }.bind(this));
        }
      },
      renderForm: function () {
        Backbone.on('signupSuccess', this.renderConfirmation, this);
        var view = new MobileDownloadOverlayFormView({currentTool: this.currentTool});
        // Google Analytic tracking when overlay is triggered
        try {
          window._GA.track(["_trackEvent", "mobile-download-overlay", "rendered", this.currentTool]);
        } catch (e) {}
        this.$el.find('.mobile-download__content').append(view.render().el);
      },
      renderConfirmation: function (args) {
        var view = new MobileDownloadOverlayConfirmationView(args),
          $content = this.$el.find('.mobile-download__content');
        $content.empty();
        $content.append(view.render().el);
      },
      hideView: function () {
        // Fade out the views
        var $el = this.$el.css('opacity', 0);
        window.setTimeout(function () {
          $el.hide();
          // Remove the child view
          this.$el.find('.mobile-download__content').empty();
        }.bind(this), 2000);
      }
    });
    return mobileDownloadOverlayView;
  });
