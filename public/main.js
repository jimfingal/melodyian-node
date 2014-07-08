requirejs(['socket.io',
          'js/midi',
          'js/router',
          'bootstrap'],
  function(io,
           MidiMessage,
           Router) {

    var loc = window.location;
    var url = location.protocol + '//' + location.hostname + ':' + location.port;
    var socket = io.connect(url);

    socket.on('midi', function(data) {
      var message = new MidiMessage(data);
      Router.routeMessage(message);
    });



});
