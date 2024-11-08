const Meta = {
currentUserTime: {
    hour: function() {
    return 8; 
    },
    day: function() {
    return 5; 
    }
}
};

const Slack = {
postToChannel: {
    skip: function(message) {
    console.log("Slack post skipped:", message);
    }
}
};

var Hour = Meta.currentUserTime.hour();
var Day = Meta.currentUserTime.day();

if (Day == 6 || Day == 7) {
Slack.postToChannel.skip("Not a weekday");
} else if (Hour < 7 || Hour > 9) {
Slack.postToChannel.skip("Not morning commute hours");
} else {
console.log("Posting to Slack during weekday morning commute hours.");
}
