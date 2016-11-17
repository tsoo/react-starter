define([
    'backbone',
    'views/base',
    'text!templates/mobileDownloadOverlay/confirmation.html'
  ],
  function(Backbone, BaseView, Template) {

    var MobileDownloadOverlayConfirmationView = BaseView.extend({

      template: Template,

      email: '',

      initialize: function(args) {
        this.email = args.email;
      },

      serialize: function() {
        return {
          email: this.email
        };
      }

    });

    return MobileDownloadOverlayConfirmationView;

  });
