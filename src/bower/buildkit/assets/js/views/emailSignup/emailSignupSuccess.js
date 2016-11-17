define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'text!templates/emailSignup/success.html'
],
function($, _, Backbone, BaseView, Template) {

  var EmailSignupSuccessView = BaseView.extend({

    template: Template

  });

  return EmailSignupSuccessView;

});
