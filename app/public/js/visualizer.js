define(['js/easing.js', 
       'lib/animationshim.js'], function(easing) {

  var easing_functions = easing;

  var canvas_width, canvas_height;
  var canvas, canvas_2d;
  var colors;

  var initializeColors = function() {

      var c1 = 205, c2 = 147, c3 = 176;
      var colors = [];

      colors.push([c1, c2, c2]);
      colors.push([c1, c2, c3]);
      colors.push([c1, c2, c1]);
      colors.push([c3, c2, c1]);
      colors.push([c2, c2, c1]);
      colors.push([c2, c3, c1]);
      colors.push([c2, c1, c1]);
      colors.push([c2, c1, c3]);
      colors.push([c2, c1, c2]);
      colors.push([c3, c1, c2]);

      colors = colors.reverse();

      return colors;
  };

  var getFillStyle = function(percent) {

    var alpha = easing_functions.easeOutCubic(percent, 0, 1, 1);
    var index = Math.floor(easing_functions.easeInCubic(percent, 0, 1, 1) * 10);
    var color_set = colors[index];
    var r = color_set[0], g = color_set[1], b = color_set[2];

    var fill = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    return fill;
  };

  var draw = function() {

    // TODO

  };

  var animate = function reAnimate() {
      window.requestAnimationFrame(reAnimate);
      draw();
  };

  // Constructor
  var Visualizer = function(leap_interface) {

    colors = initializeColors();

    canvas = document.querySelector('canvas');
    canvas_2d = canvas.getContext('2d');

    var resizeCanvas = function() {
      canvas_width = window.innerWidth;
      canvas_height = window.innerHeight;
      canvas_2d.canvas.width = canvas_width;
      canvas_2d.canvas.height = canvas_height;
      bar_width = canvas_width / num_bins_displayed;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, false);

    animate();

  };

  return Visualizer;

});
