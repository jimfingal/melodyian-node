requirejs(['socket.io',
          'js/visualizer.js',
          'js/leapinterface',
          'lib/pace.min',
          'bootstrap'],
  function(io,
           Visualizer,
           LeapInterface,
           pace) {

    pace.start();
    var loc = window.location;
    var url = location.protocol + '//' + location.hostname + ':' + location.port;
    var socket = io.connect(url);
    var leap_interface = new LeapInterface(socket);
    var visualizer = new Visualizer(leap_interface);
});
