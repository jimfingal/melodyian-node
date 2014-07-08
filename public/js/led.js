define(['js/midicc', 'jquery', 'tinycolor'], function(MidiCC, $, tinycolor) {

    var r = 0;
    var g = 0;
    var b = 0;

    var map = function(value, in_min, in_max, out_min, out_max) {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };

    var mapFader = function(value) {

        var color_value;

        if (value >= 0 && value <= 16) {
            color_value = map(value, 0, 16, 0, 8);
        } else if (value >= 17 && value <= 100) {
            color_value = map(value, 101, 127, 201, 255);
        }  else {
            color_value = map(value, 101, 127, 201, 255);
        }

        return color_value;
    
    }

    var LED = {};

    var handlers = {};

    handlers[MidiCC.RED_CC] = function(message) {
        r = mapFader(message.val);
    };

    handlers[MidiCC.GREEN_CC] = function(message) {
        g = mapFader(message.val);
    };

    handlers[MidiCC.BLUE_CC] = function(message) {
        b = mapFader(message.val);
    };

    LED.handleMessage = function(midi_message) {
        if (midi_message.number in handlers) {
            handlers[midi_message.number](midi_message);
        }

        var hex = tinycolor("rgb (" + r + ", " + g + ", " + b + ")");
        $('#visualizer').css("background-color", hex);
    };

    return LED;
});
