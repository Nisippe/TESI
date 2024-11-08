// Mocking the Caavo object
const Caavo = {
    voiceSearch: {
        Text: "Can you set the temperature to 72 degrees?"
    }
    };
    
    // Mocking the Ecobee object
    const Ecobee = {
    holdHoldhours: {
        skip: function() {
        console.log("Skipping temperature setting as the query doesn't include 'set the temperature'.");
        }
    }
    };

let userVoiceCommand = Caavo.voiceSearch.Text.toLowerCase();


if (userVoiceCommand.indexOf("set the temperature") < 0) {
Ecobee.holdHoldhours.skip();
}
