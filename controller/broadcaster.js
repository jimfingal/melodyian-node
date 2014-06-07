var leaprobot = require('./leaprobot');
var MessageHandler = require('./messagehandler').MessageHandler;
var io = require('socket.io-client');
var bunyan = require('bunyan');
var _ = require('underscore');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
//var target = argv._[0];
var loglevel = argv['debug'] ? 'debug' : 'info';

/*
var socket = io.connect(target);

socket.on('connect', function(data) {
  console.log('connected');
});
*/

var zmq = require('zmq');
var sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');


var log = bunyan.createLogger({
    name: 'broadcaster',
    stream: process.stdout,
    level: loglevel
  }
);

var sendMessage = function(message) {
  sock.send(JSON.stringify(message));
  //socket.emit('frame', message);
};


var handler = new MessageHandler();

var process_frame = function(my) {

  my.leapmotion.on('connect', function() {
    log.info('Connected');
  });

  my.leapmotion.on('start', function() {
    log.info('Started');
  });

  my.leapmotion.on('frame', function(frame) {

    var message = handler.messageFromFrame(frame);

    if (_.keys(message.frame).length || message.inputs.length) {
      log.debug(message);
    }

    sendMessage(message);

  });
};


var robot = leaprobot.getLeapRobot(process_frame);
robot.start();



