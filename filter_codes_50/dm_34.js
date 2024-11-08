const Trigger = {
EntryTitle: "New Technology Trends for 2024"
};

const IfNotifications = {
sendNotification: {
    skip: function(message) {
    console.log("Notification skipped:", message);
    }
}
};

var title = Trigger.EntryTitle;
var subject = "Ask Slashdot";

if (title.indexOf(subject) < 0) {
IfNotifications.sendNotification.skip("Not an 'Ask Slashdot' article");
} else {
console.log("Sending notification for 'Ask Slashdot' article.");
}
