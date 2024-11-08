// Mocking the Twitter object
const Twitter = {
newTweetByUser: {
    Text: "Check out the new gaming console coming soon!"
}
};

// Mocking the DataStorage object
const DataStorage = {
saveData: function(text) {
    console.log("Data saved: ", text);
}
};

// Mocking the IfNotifications object
const IfNotifications = {
sendNotification: {
    skip: function() {
    console.log("Notification skipped.");
    }
}
};

if (Twitter.newTweetByUser.Text.indexOf("SNES") < 0 &&
    Twitter.newTweetByUser.Text.indexOf("Super NES") < 0 &&
    Twitter.newTweetByUser.Text.indexOf("Super Nintendo") < 0) {

DataStorage.saveData(Twitter.newTweetByUser.Text);
IfNotifications.sendNotification.skip();
}
