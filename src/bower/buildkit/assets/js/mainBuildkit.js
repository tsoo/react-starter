requirejs.config({

  baseUrl: '/assets/js/',

  paths: {
    jquery: 'vendor/jquery/dist/jquery.min',
    backbone: 'vendor/backbone/backbone',
    underscore: 'vendor/underscore/underscore',
    page: 'views/page',
    text: 'lib/require/text',
    templates: '../templates',
    qtip2: 'vendor/qtip2/jquery.qtip.min',
    magnificPopup: 'vendor/magnific-popup/dist/jquery.magnific-popup.min',
    jqueryUI: 'vendor/jquery-ui/jquery-ui',
    config: 'config/config',
    i18n: 'lib/i18n',
    jqueryCookie: 'vendor/jquery.cookie/jquery.cookie'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    chosen: {
      deps: ['jquery']
    },
    qtip2: {
      deps: ['jquery']
    },
    magnificPopup: {
      deps: ['jquery']
    },
    jqueryUI: {
      deps: ['jquery']
    },
    i18n: {
      exports: 'I18n'
    },
    jqueryCookie: {
      deps: ['jquery']
    },
    page: {
      deps: [
        'text',

        /*
          Locales
        */
        'locales/de',
        'locales/en-gb',
        'locales/en',
        'locales/es',
        'locales/fr',
        'locales/it',
        'locales/nl',
        'locales/pt',

        /*
          Views
        */
        'views/bannerModal',
        'views/buildkit',
        'views/coloredHeaderColumn',
        'views/controlsNav',
        'views/dropdownMenu',
        'views/heroBanner',
        'views/languageSelect',
        'views/post',
        'views/productVisualizer',
        'views/search',
        'views/tooltips',
        'views/templateSelector',
        'views/responsiveTable',
        'views/emailSignup/emailSignup',
        'views/mobileDownloadOverlay/mobileDownloadOverlay',
        'views/drawer',
        'views/tabCombo',
        'views/promoBanner',
        'views/accordion',
        'views/tabSlider',
        'views/grid',
        'views/tag',
        'views/searchBox',
        'views/dropdownModal'
      ],
      exports: 'page'
    }

  }

});

// Set up baseUrl properly now. If we put this earlier, it confuses Grunt.
// See https://github.com/jrburke/r.js/issues/270
var Blurb = window.Blurb || {};
Blurb.config = Blurb.config || {};

requirejs.config({
  // Base path used to load scripts. If you want to override the fallback,
  // you have to do it globally before loading main.js.
  baseUrl: Blurb.config.scriptBaseUrl || '/assets/js/'
});

/*
  Blurb Namespace
*/
var Blurb = Blurb || {};

/*
  Bootstrap the application
*/
require(
  ['jquery', 'i18n', 'page'],
  function($, I18n, PageView) {

  I18n.fallbacks = true;
  I18n.defaultLocale = 'en';
  if(typeof Blurb.locale !== 'undefined') {
    I18n.locale = Blurb.locale;
  }

  new PageView({el: $('body')});
});
