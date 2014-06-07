var express = require('express'),
  http = require('http'),
  path = require('path'),
  io = require('socket.io');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Worldeater' });
});

var server = http.createServer(app);
var serverio = io.listen(server);
serverio.set('log level', false);

server.listen(app.get('port'));
console.log('listening on port ' + app.get('port'));

serverio.sockets.on('connection', function(socket) {
  socket.on('frame', function(data) {
      console.log(data);
      serverio.sockets.emit('receive', data);
  });
});
