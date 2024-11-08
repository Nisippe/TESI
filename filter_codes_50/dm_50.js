const Meta = {
currentUserTime: {
    isoWeekday: () => 3,
    hour: () => 10
}
};

const Twitter = {
newTweetFromSearch: {
    Text: "Exciting news on the new feature!",
    LinkToTweet: "https://twitter.com/someuser/status/123456789"
}
};

const Telegram = {
sendMessage: {
    setText: (text) => console.log("Text to send:", text),
    setIncludeWebPagePreview: (value) => console.log("Web page preview:", value),
    skip: () => console.log("Message skipped")
}
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay >= 5 && timeOfDay <= 22) {
Telegram.sendMessage.setText(Twitter.newTweetFromSearch.Text + "<br><br>" + Twitter.newTweetFromSearch.LinkToTweet);
Telegram.sendMessage.setIncludeWebPagePreview("1");
} else {
Telegram.sendMessage.skip();
}
