// Mocking the Twitter object
const Twitter = {
newTweetByUser: {
    Text: "Check out our latest newsletter: https://example.com/newsletter1234 for updates!"
}
};

// Mocking the Pocket object
const Pocket = {
readItLater: {
    setUrl: function(url) {
    console.log("URL saved to Pocket:", url);
    },
    setUserInfo: function(userInfo) {
    console.log("User info stored in Pocket:", userInfo);
    },
    skip: function(reason) {
    console.log("Skipped adding to Pocket:", reason);
    }
}
};


var linkRegex = /newsletter.*(https:\/\/\S+)/;
var matchResult = linkRegex.exec(Twitter.newTweetByUser.Text);


if (matchResult && matchResult.length === 2) {
Pocket.readItLater.setUrl(matchResult[1]);

var userInfo = Twitter.newTweetByUser;
Pocket.readItLater.setUserInfo(userInfo);
} else {
Pocket.readItLater.skip('Likely not Money Stuff');
}
