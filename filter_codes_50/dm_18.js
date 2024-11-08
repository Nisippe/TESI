const User = {
    getAge: function() {
        return 25;
    },
    getUserInterests: function() {
        return ["sports", "music", "technology", "travel"];
    }
};

const EventSystem = {
    sendEventInvite: function(event) {
        console.log("Event invite sent for: " + event);
    }
};

var userAge = User.getAge();
var userInterests = User.getUserInterests();
var eventDetails = "Join us for a sports event!";
var inviteMessage = "Hello! You might be interested in this event based on your interests in ";

if (userAge >= 18 && userInterests.includes("sports")) {
    EventSystem.sendEventInvite(inviteMessage + userInterests.join(", ") + ". Event: " + eventDetails);
}
