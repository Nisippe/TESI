const Meta = {
currentUserTime: {
    hour: function() {
    return 23;
    }
}
};

const IfNotifications = {
sendNotification: {
    skip: function(message) {
    console.log("Notification skipped:", message);
    }
}
};

const Feedly = {
createNewEntryFeedly: {
    skip: function(message) {
    console.log("Feedly entry skipped:", message);
    }
}
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay >= 22 || timeOfDay < 8) {
IfNotifications.sendNotification.skip("Too late");
} else {
Feedly.createNewEntryFeedly.skip("I already know");
}
