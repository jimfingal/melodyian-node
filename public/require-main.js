require.config({
    'baseUrl': '.',
    'paths': {
      'jquery': 'bower_components/jquery/dist/jquery.min',
      'jquery-ui': 'bower_components/jquery-ui/ui/jquery-ui',
      'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
      'underscore' : 'bower_components/underscore/underscore',
      'socket.io' : 'bower_components/socket.io-client/socket.io',
      'tinycolor' : 'bower_components/tinycolor/tinycolor'

    },
    'shim': {
        'jquery': {
            exports: 'jQuery'
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'bootstrap': {
          deps: ['jquery']
        }
    },
});
require(["main"]);
