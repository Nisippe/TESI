const Ecobee = {
motionDetected: {
    EventType: "Home"
}
};

const Aquanta = {
cancelAway: {
    skip: function() {
    console.log("Cancel Away skipped.");
    }
},
away: {
    skip: function() {
    console.log("Away action skipped.");
    }
}
};

var EventType = Ecobee.motionDetected.EventType.toLowerCase();

if (EventType.indexOf("away") != -1) {
Aquanta.cancelAway.skip();
} else if (EventType.indexOf("home") != -1) {
Aquanta.away.skip();
}
