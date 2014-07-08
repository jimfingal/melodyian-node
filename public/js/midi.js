define(function() {

    var MidiMessage = function(data_frame) {
        this.channel = data_frame[0];
        this.number = data_frame[1];
        this.val = data_frame[2];
    }

    return MidiMessage;
});
