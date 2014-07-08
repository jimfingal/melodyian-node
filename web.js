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

server.listen(app.get('port'));
console.log('listening on port ' + app.get('port'));

var midi = require('midi');
var inputName = "Daemon Input 0";
var input = new midi.input();

for (var i = 0; i < input.getPortCount(); ++i) {
  if (input.getPortName(i) == inputName) {
    console.log('Input found: ' + input.getPortName(i));
    console.log('Opening ' + input.getPortName(i));
    input.openPort(i);
  }
}

input.on('message', function(deltaTime, message) {
  console.log('input m:' + message + ' d:' + deltaTime);
  serverio.sockets.emit('midi', message);
});
