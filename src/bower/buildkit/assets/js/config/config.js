define([
  'jquery',
  'underscore'
], function($, _) {

  Blurb = window.Blurb || {};
  Blurb.config = Blurb.config || {};

  /*
    Config values for backbone app
  */
  return _.extend({

    /*
      Newsletter opt in API
    */
    newsletterOptInAPIEndpoint: '/api/v4/users/newsletter_opt_in',

    /*
     Mobile tool download in API
     */
    toolDownloadAPIEndpoint: '/api/v4/emails/tool_download',

    /*
      AppFeature API
    */
    appFeatureAPIEndpoint: '/api/v4/app_feature',

    /*
      Asset Base Path
    */
    assetBasePath: '/assets/',

    /*
     Maps ISO 639-1-style language codes as provided by e.g. Drupal
     (e.g. en, es) to combination ISO-639-1/ISO-3166 codes (e.g. en_US, es_ES)
     for use by the book prices API. Note: Drupal uses some non-standard codes
     such as es-la, which aren't strictly ISO 639-1, but it doesn't matter for
     this purpose.
     */
    languageCodeMapping: {
      de: 'de_DE',
      'en-au': 'en_AU',
      'en-ca': 'en_CA',
      'en-gb': 'en_GB',
      en: 'en_US',
      es: 'es_ES',
      'es-la': 'es_US',
      'fr-ca': 'fr_CA',
      fr: 'fr_FR',
      it: 'it_IT',
      nl: 'nl_NL',
      'pt-br': 'pt_BR',
      pt: 'pt_BR'
    },

    servicesUrl: function() {
      var host = window.location.hostname;
      // 5678 - buildkit port
      // 4000 - website port
      // 3004 - pricing page port
      // 4043 - adhoc port
      if (host.indexOf('master') !== -1 || this.isLocalEnv()) {
        return 'http://services.master.eng.blurb.com';
      } else if (host.indexOf('integration') !== -1){
        return 'http://services.integration.eng.blurb.com';
      } else {
        return 'http://services.blurb.com';
      }
    },

    // The base URL to for APIs hosted on blurby or Drupal
    baseUrl: function() {
      return this.isLocalEnv() ? 'http://www.blurb.com' : '';
    },

    isLocalEnv: function() {
      return /5678|4000|4043|3004/.test(window.location.port);
    }
  }, Blurb.config);

});
