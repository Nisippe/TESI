// Mocking the GlobalVideoData
let GlobalVideoData = [];

// Mocking the Youtube object
const Youtube = {
newPublicVideoFromSubscriptions: {
    Title: "Amazing Gameplay in Fantasy World",
}
};

// Mocking the Twitter object
const Twitter = {
postNewTweet: function(tweetContent) {
    console.log("Tweet posted: " + tweetContent);
}
};

let videoTitle = Youtube.newPublicVideoFromSubscriptions.Title;


if (videoTitle.toUpperCase().indexOf("Fantasy") === -1) {
Twitter.postNewTweet("New video uploaded: " + videoTitle);
}

