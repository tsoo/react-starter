define(['jquery', 'config', 'lib/featureBit'], function($, Config, FeatureBit) {

  /*
    Example usage: new FeatureBitInDOM().update();
  */

  /**
   Contsructor
   @$els: (optional) a jQuery array of feature-bit elements, useful
     for cases where feature-bitted elements are dynamically added to the DOM.
   */
  function FeatureBitInDOM($els) {
    // An array of feature bits that looks like:
    // { feature: feature, ignoreSessionStorage: ignoreSessionStorage) }
    this.featureBits = [];
    this.$els = $els || $('[data-feature-bit]');
  };

  FeatureBitInDOM.prototype.update = function() {
    this.find();
    this.query();
  };

  // Searches the features array and only pushes a new one if it doesn't exist.
  // If one exists, we update ignoreSessionStorage if it's true.
  FeatureBitInDOM.prototype.push = function(feature, ignoreSessionStorage) {
    // Search our array of features that we've already queried
    var featureBit = this.featureBits.filter(function(item) {
      if (item.feature === feature) {
        return item;
      }
    });

    if (featureBit.length) {
      // Filter returns an array, so get the first match found
      featureBit = featureBit[0];
      if (!featureBit.ignoreSessionStorage && ignoreSessionStorage) {
        featureBit.ignoreSessionStorage = true;
      }
    } else {
      // None found, create one
      featureBit = {
        feature: feature,
        ignoreSessionStorage: ignoreSessionStorage
      };
      this.featureBits.push(featureBit);
    }
  };

  // Searches the DOM for unique feature bits
  FeatureBitInDOM.prototype.find = function() {
    this.$els.each(function(index, el) {
      var $el = $(el),
          feature = $el.data('feature-bit'),
          options = $el.data('options'),
          ignoreSessionStorage = /ignore-session-storage:true/i.test(options);

      this.push(feature, ignoreSessionStorage);
    }.bind(this));
  };

  // Loops through each unique feature bit to determine if it's enabled.
  FeatureBitInDOM.prototype.query = function() {
    for (var i = 0, len = this.featureBits.length; i < len; i++) {
      this.enabled(this.featureBits[i]);
    }
  };

  // Calls FeatureBit.enabled
  FeatureBitInDOM.prototype.enabled = function(bit) {
    FeatureBit.enabled(bit.feature, function() {
      var $matches = this.$els.filter('[data-feature-bit="' + bit.feature + '"]');
      $matches.each(function(index, el) {
        var $el = $(el),
            showIfEnabled = !(/show-if-enabled:false/i.test($el.data('options')));
        showIfEnabled ? $el.removeClass('hidden').show() : $el.hide();
      });
    }.bind(this), bit.ignoreSessionStorage);
  };

  window.FeatureBitInDOM = FeatureBitInDOM;
  return FeatureBitInDOM;

});
