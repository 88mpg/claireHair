(function (window, document, $, undefined) {
  'use strict';

  var $win = $(window),
  w = 0,h = 0,
  rgb = [],
  getWidth = function() {
    w = $win.width();
    h = $win.height();
  };

  $win.resize(getWidth).mousemove(function(e) {

    rgb = [
      Math.round(e.pageX/w * 255),
      Math.round(e.pageY/h * 255),
      150
    ];

    $(document.body).css('background-color','rgb('+rgb.join(',')+')');

  }).resize();

})(window, document, jQuery);
