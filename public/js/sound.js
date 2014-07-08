define(['js/midicc', 'js/synth', 'js/mixer'], function(MidiCC, Synth, Mixer) {

    var synth = new Synth();
    synth.turnOn();

    Mixer.addChannel(synth, 'Synth!');

    var Sound = {};

    var handlers = {};

    // Note on channel
    handlers[144] = function(message) {
        if (message.val == 127) {
            console.log("Playing note: " + message.number);
            synth.playNote(message.number);
        } else {
            console.log("Fading note: " + message.number);
            synth.fadeNote(message.number);
        }
    };

    Sound.handleMessage = function(midi_message) {
        console.log("Sound handling");
        console.log(midi_message);

        if (midi_message.channel in handlers) {
            handlers[midi_message.channel](midi_message);
        }
    };

    return Sound;

});
