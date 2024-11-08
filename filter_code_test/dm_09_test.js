// Mock of Meta object
const Meta = {
currentUserTime: {
    hour: function() {
    return new Date().getHours(); // Returns current hour
    },
    day: function() {
    return new Date().getDay(); // Returns current day (0-6)
    }
}
};

// Mock of Slack object
const Slack = {
postToChannel: {
    skip: function(message) {
    console.log("Skip: " + message);
    }
}
};

if (Meta.currentUserTime.hour() < 7 || Meta.currentUserTime.hour() > 10) {
Slack.postToChannel.skip("Outside of commuting hours");
} else if (Meta.currentUserTime.day() === 6 || Meta.currentUserTime.day() === 7) {
Slack.postToChannel.skip("Not a weekday");
}
