define(['jquery', 'config'], function($, Config) {

  /*
    Example usage:

    FeatureBit.enabled(feature, function() { callback(); }, ignoreSessionStorage, useUsernameForContextId);
  */

  function FeatureBit() { };

  FeatureBit.prototype.enabled = function(feature, callback, ignoreSessionStorage) {
    var username = this.getUsernameFromCookie();

    // Do we have this feature bit stored in sessionStorage?
    if (!ignoreSessionStorage) {
      var val = window.sessionStorage.getItem(this.getSessionStorageKey(feature, username));
      if (val) {
        if (val === '1') {
          callback();
        }
        return; // No need to hit API
      }
    }

    // Use username instead of sessionId when available.
    if (username) {
      this.checkAPI(feature, ignoreSessionStorage, username, callback);
    } else {
      BlurbySession.getId(function(sessionId) {
        this.checkAPI(feature, ignoreSessionStorage, sessionId, callback);
      }.bind(this));
    }
  };

  // Parses the dm cookie for the username
  FeatureBit.prototype.getUsernameFromCookie = function() {
    var match = unescape(document.cookie).match(/"username":"([\w\-]+)"/);
    return match ? match[1] : '';
  };

  FeatureBit.prototype.checkAPI = function(feature, ignoreSessionStorage, contextId, callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: Config.servicesUrl() + '/feature-service/feature/' + feature,
      data: { context_id: contextId },
      // Needed for Safari, see https://www.raymondcamden.com/2015/07/16/safari-and-http-caching/
      cache: false
    }).done(function(data) {
      if (data.enabled) {
        callback();
      }

      if (!ignoreSessionStorage) {
        try {
          // Store the value in SessionStorage
          window.sessionStorage.setItem(this.getSessionStorageKey(feature, contextId), data.enabled ? '1' : '0');
        } catch(err) { }
      }
    }.bind(this));
  };

  FeatureBit.prototype.getSessionStorageKey = function(feature, contextId) {
    // This forces a new API request should the user sign in.
    // Usernames have a 12 character limit. Session ids can be up to 32 characters.
    if (contextId && contextId.length <= 12) {
      return feature + '-' + contextId;
    } else {
      return feature;
    }
  };

  // Gets us the Blurby session id, required for the feature service
  var BlurbySession = (function($) {

    var sessionId;

    // By hitting an API in Blurby, we trigger writing of the _session_id
    // cookie. We use the navigation footer API b/c it's a smaller reponse.
    var hitApiForId = function(callback) {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: Config.baseUrl() + '/api/v4/navigation/footer'
      }).done(function() {
        // Wait a bit till the cookie is written
        window.setTimeout(function() {
          callback(getIdFromCookie());
        }, 100);
      });
    };

    var getIdFromCookie = function() {
      var idMatch = document.cookie.match(/_session_id=(\w+)\b/);
      if (idMatch) {
        sessionId = idMatch[1];
        return sessionId;
      }
      return '';
    };

    return {
      getId: function(callback) {
        var id = (sessionId ? sessionId : getIdFromCookie());
        return id ? callback(id) : hitApiForId(callback);
      }
    };

  })($);

  var fb = new FeatureBit();

  // Expose this to global namespace so it can be used in other apps that
  // import Buildkit.
  window.FeatureBit = fb;

  return fb;

});
