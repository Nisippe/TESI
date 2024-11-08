const Meta = {
currentUserTime: {
    isoWeekday: function() {
    return 3;
    },
    hour: function() {
    return 6;
    }
}
};

const Telegram = {
sendMessage: {
    setText: function(text) {
    console.log("Telegram message text set:", text);
    },
    setIncludeWebPagePreview: function(value) {
    console.log("Web page preview included:", value);
    },
    skip: function() {
    console.log("Telegram message skipped due to time restrictions.");
    }
}
};

const Twitter = {
newTweetFromSearch: {
    Text: "Here's a new tweet!",
    LinkToTweet: "https://twitter.com/example/status/12345"
}
};

var actualDay = Meta.currentUserTime.isoWeekday();
var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay >= 5 && timeOfDay <= 22) {
Telegram.sendMessage.setText(Twitter.newTweetFromSearch.Text + "<br><br>" + Twitter.newTweetFromSearch.LinkToTweet);
Telegram.sendMessage.setIncludeWebPagePreview("1");
} else {
Telegram.sendMessage.skip();
}
