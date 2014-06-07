var keypress = require('keypress');
var _ = require('underscore');

var INPUTS = ['hands'];


var MessageHandler = function() {

  var power_on = false;

  var message = {
    'frame' : {},
    'commands' : []
  };

  var frame_keypresses = {};

  var resetMessage = function(message) {
    message.frame = {};
    message.commands.length = 0;
  };

  var resetKeypresses = function() {
    _.forEach(_.keys(frame_keypresses), function(key) {
      delete frame_keypresses[key];
    });
  };

  var pushCommandFromCurrentPower = function() {

      if (power_on) {
        message.commands.push('poweron');
      } else {
        message.commands.push('poweroff');
      }

  };

  var exitProcess = function() {

    // Graceful closure -- turn off all clients
    if (power_on) {
      power_on = false;
      pushCommandFromCurrentPower();
      sendMessage(message);
    }

    process.kill();

  };

  var setupKeyboardInput = function() {
    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on('keypress', function(ch, key) {

      if (key && key.ctrl && key.name == 'c') {
        exitProcess();
      } else {
        frame_keypresses[key.name] = true;
      }
    });

  };

  var togglePower = function() {

      if (power_on) {
        power_on = false;
      } else {
        power_on = true;
      }
  };

  this.messageFromFrame = function(frame) {

    resetMessage(message);

    _.each(INPUTS, function(key) {
      message.frame[key] = frame[key];
    });

    if ('space' in frame_keypresses) {
      togglePower();
    }

    pushCommandFromCurrentPower();

    resetKeypresses();

    return message;
  };

  setupKeyboardInput();

};



module.exports.MessageHandler = MessageHandler;
