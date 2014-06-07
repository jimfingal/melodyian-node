'use strict';
var Cylon = require('cylon');


var getLeapRobot = function(process_frame) {

    var robot_settings = {
        connection: {
            name: 'leapmotion',
            adaptor: 'leapmotion',
            port: '127.0.0.1:6437'
        },

        device: {
            name: 'leapmotion',
            driver: 'leapmotion'
        },

          work: process_frame
    };


    return Cylon.robot(robot_settings);

};

module.exports.getLeapRobot = getLeapRobot;
