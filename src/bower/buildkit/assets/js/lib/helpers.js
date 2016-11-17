require([
  'underscore',
  'config'
],

function(_, Config) {

  /*
    Miscellaneous helper methods
  */
  _.mixin({

    /*
      Removes null/falsey values from
      an object
      ** Warning, this will remove a value of 0 **
    */
    compactObject: function(obj) {
      var newObj = _.clone(obj);
      _.each(newObj, function(val, key) {
        if(val === null) {
          delete newObj[key];
        }
      });
      return newObj;
    },

    /*
      Returns the asset path
    */
    getAssetPath: function(relativePath) {
      return Config.assetBasePath + relativePath;
    },

    /*
      Parses the query string params, setting it to a local var
    */
    getQueryStringParams: function() {
      var qs = {};
      unescape(location.search).replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { qs[$1] = $3; }
      );
      return qs;
    },

    /*
     Triggers custom events with vanilla JS
    */
    dispatchCustomEvent: function(eventName, detail, el) {
      el = el || document;

      var e;
      if (typeof Event === 'function') {
        // Custom Events: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
        e = detail && typeof CustomEvent === 'function' ? new CustomEvent(eventName, { 'detail': detail }) : new Event(eventName);
      } else if (detail) {
        // IE11 has slightly different syntax
        e = document.createEvent('CustomEvent');
        e.initEvent(eventName, false, true, detail); // type, canBubble, cancelable, detail
      } else {
        e = document.createEvent('Event');
        e.initCustomEvent(eventName, false, true);
      }
      el.dispatchEvent(e);
    },

    /*
     Gets the right dimensions for elements hidden with display: none.
     See http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
    */
    getHiddenDimensions: function($el, includeMargin) {
      var $item = $el,
        props = { position: 'absolute', visibility: 'hidden', display: 'block' },
        dim = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 },
        $hiddenParents = $item.parents().andSelf().not(':visible'),
        includeMargin = (includeMargin == null) ? false : includeMargin;

      var oldProps = [];
      $hiddenParents.each(function () {
        var old = {};
        for (var name in props) {
          old[name] = this.style[name];
          this.style[name] = props[name];
        }
        oldProps.push(old);
      });

      dim.width = $item.width();
      dim.outerWidth = $item.outerWidth(includeMargin);
      dim.innerWidth = $item.innerWidth();
      dim.height = $item.height();
      dim.innerHeight = $item.innerHeight();
      dim.outerHeight = $item.outerHeight(includeMargin);

      $hiddenParents.each(function (i) {
        var old = oldProps[i];
        for (var name in props) {
          this.style[name] = old[name];
        }
      });

      return dim;
    }

  });

});
