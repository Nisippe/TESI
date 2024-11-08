const User = {
    getAge: function() {
        return 25;
    },
    getUserInterests: function() {
        return ["sports", "music", "technology", "travel"];
    }
}

const EventSystem = {
    sendEventInvite: function(event) {
        console.log("Event invite sent for: " + event);
    }
};

if (User.getAge() >= 18 && User.getUserInterests().includes("sports")) {
    EventSystem.sendEventInvite("Join us for a sports event!");
}
