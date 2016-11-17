define([
  'jquery',
  'views/base'
],

  function ($, BaseView) {
    var gridView = BaseView.extend({
      initialize: function () {
        this.setWidth();
      },

      setWidth: function() {
        var $el = this.$el,
            imgPath = $el.find('.grid__img').first().attr('src');

        if (imgPath) {
          var img = new Image();
          img.src = imgPath;
          img.onload = function() {
            var w = this.width;
            $el.find('.grid__img, .grid__content, .grid__btns, .grid__header, .grid__text').css('max-width', w);
          };
        }
      }
    });
    return gridView;
  });
