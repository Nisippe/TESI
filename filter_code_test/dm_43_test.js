const FacebookPages = {
newStatusMessageByPage: {
    Message: "Here is a long Facebook status message that exceeds 115 characters to test truncation functionality for Twitter posts. It should end with an ellipsis.",
    PageUrl: "https://facebook.com/examplepage"
}
};

const Twitter = {
postNewTweet: {
    setTweet: function(tweet) {
    console.log("Tweet set:", tweet);
    }
}
};

if (FacebookPages.newStatusMessageByPage.Message.length >= 115) {
var subStr = FacebookPages.newStatusMessageByPage.Message.substr(0, 107);
subStr += " [...] ";
Twitter.postNewTweet.setTweet(subStr + FacebookPages.newStatusMessageByPage.PageUrl);
} else {
Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.Message + " " + FacebookPages.newStatusMessageByPage.PageUrl);
}
