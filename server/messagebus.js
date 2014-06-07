var zmq = require('zmq');
var sock = zmq.socket('pull');
var bunyan = require('bunyan');
var argv = require('minimist')(process.argv.slice(2));
var loglevel = argv['debug'] ? 'debug' : 'info';

var log = bunyan.createLogger({
    name: 'worker',
    stream: process.stdout,
    level: loglevel
  }
);


sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg) {
  console.log(msg.toString());
});
