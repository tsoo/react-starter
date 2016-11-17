define([
  'jquery',
  'views/base',
  'lib/breakpoints'
],
function($, BaseView, Breakpoints) {

  var responsiveTableView = BaseView.extend({
    initialize: function() {
      this.sizeTable(Breakpoints.breakpoint);
      Breakpoints.on('change', function(size) {
        this.sizeTable(size);
      }.bind(this));
    },

    sizeTable: function(size) {
      // IE9 and older browsers don't play nice with setting
      // display to 'block' for tables/rows/cells.
      // RGBA is also not supported in those browsers,
      // so we check for .no-rgba which is added by Modernzr.
      if ($('html').hasClass('no-rgba')) { return; }

      var $table = this.$el.find('.rspnsv-tbl__table');

      if (size === 'lg') {
        // Technically, no longer a table.
        // Set the widths and heights so things line up.
        var columnCnt = $table.find('tr').length, // Rows turn into columns
            columnWidth = 100/columnCnt;
        $table.find('.rspnsv-tbl__thead').css('width', columnWidth + '%');
        $table.find('.rspnsv-tbl__tbody').css('width', ((columnCnt-1) * columnWidth) + '%');
        $table.find('.rspnsv-tbl__tbody .rspnsv-tbl__tr').css('width', (100 / (columnCnt-1)) + '%');

        // Find the maximum height
        var heights = [],
            $cells = $table.find('.rspnsv-tbl__th, .rspnsv-tbl__td');
        $cells.each(function(index, el) {
          heights.push($(el).outerHeight());
        });
        var maxHeight = Math.max.apply(null, heights);
        $cells.css('height', maxHeight + 'px');

      } else {
        // Show the mobile version.
        // Remove all the inline style attributes that may have been added
        // for the 'lg' breakpoint
        $table.find('.rspnsv-tbl__thead, .rspnsv-tbl__tbody, .rspnsv-tbl__tr').removeAttr('style');
      }
    },
  });

  return responsiveTableView;
});
