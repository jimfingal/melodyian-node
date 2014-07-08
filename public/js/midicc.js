define(function() {

    var MidiCC = {};

    MidiCC.RED_CC = 20  //CC controlling 'Red' amount of LED (0 = red LED off, 127 = red LED at 100% brightness)
    MidiCC.GREEN_CC = 21 //CC controlling 'Green' amount of LED
    MidiCC.BLUE_CC = 22 //CC controlling 'Blue' amount of LED
    MidiCC.DYNAMIC_CC = 23 //Not actively used right now...CC value controlling amount of LED brightness for currently unused light queue pattern. Ask Scott if you're curious about this.

    MidiCC.MSTRMTRSPD_CC = 27 //CC controlling 'master' motor speed (0 = motors off, 127 = full speed) both motors determine their 'actual' speed based off this value
    MidiCC.MTRDIRREV_CC = 58 //CC allowing toggle of motor direction (0 = standard 'forward' direction based off steering control, 127 = reversal of all current motor directions)
    MidiCC.MTRACT_CC = 59 //CC toggling motor activation (0 = motors off, 127 = motors on)
    MidiCC.MTRSTEER_CC  =71 //CC controlling 'steering' direction of robots two motors (0 = complete counter-clockwise rotation, 64 = straight forward direction, 127 = complete clockwise rotation, and everything in between is a linear scaling of these....)

    MidiCC.ARMEEPROM_CC = 60  //CC activating arm EEPROM write mode for saving LED color presets (0 = unarmed, 127 = armed)
    MidiCC.WRITECOLOR_CC = 90 //CC executes write to EEPROM of LED color preset values (127 = write, 0 = don't write)

    MidiCC.MEL1TRIG_CC = 28 //CC triggers melody1 loop (0 = off, 127 = active)
    MidiCC.MEL2TRIG_CC = 29 //CC triggers melody2 loop (0 = off, 127 = active)
    MidiCC.KEYACT_CC = 35 //CC activates manual 'keyboard' style note control (0 = off, 127 = active)

    MidiCC.BAT1VOLTREAD_CC = 30 //CC number whose value (0-127) represents a scaled reading of the robots battery level

    MidiCC.SETCOLQ_CC = 52 //CC activates basic 'Set Color' light queue (static LED color control) (0 = inactive, 127 = active)
    MidiCC.FLASHQ_CC = 53 //CC activates the 'Flash' light queue (0 = inactive, 127 = active)
    MidiCC.AUTOFADEQ_CC = 54 //CC activates the 'Auto Fade' light queue (0 = inactive, 127 = active)
    MidiCC.DYNAMICQ_CC = 55  //CC activates the 'Dynamic Pulse' light queue (not currently an active feature of the robot) (0 = inactive, 127 = active)

    MidiCC.RATE1_CC = 75  //CC whose value (0-127) is scaled to control the frequency of various functions (LED flash rate, melody tempo, autofade rate)
    MidiCC.FADESPD_CC = 77 //CC whose value (0-127) is scaled to control the decay speed of the LEDs brightness when using the 'Dynamic Pulse' queue functionality (currently not in use)
    MidiCC.JITTER_CC = 78 //CC whose value (0-127) is scaled to control the amount of colorJitter and noteJitter (randomness amount)

    MidiCC.TRIGLP1_CC = 80 //CC activating the recall or saving to Light Preset 1 (0 = uncalled, 127 = recall LED RGB values of lightPreset1 or save to lightPreset1)
    MidiCC.TRIGLP2_CC = 81 //CC activating the recall or saving to Light Preset 2 (0 = uncalled, 127 = recall LED RGB values of lightPreset2 or save to lightPreset2)
    MidiCC.TRIGLP3_CC = 82 //CC activating recall or writing to Light Preset 3
    MidiCC.TRIGLP4_CC = 83 //CC activating recall or writing to Light Preset 4
    MidiCC.TRIGLP5_CC = 84 //CC activating recall or writing to Light Preset 5
    MidiCC.TRIGLP6_CC = 85 //CC activating recall or writing to Light Preset 6
    MidiCC.TRIGLP7_CC = 86 //CC activating recall or writing to Light Preset 7
    MidiCC.TRIGLP8_CC = 87 //CC activating recall or writing to Light Preset 8

    return MidiCC;
});
