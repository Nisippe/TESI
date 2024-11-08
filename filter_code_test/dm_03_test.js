const ReviewFeed = {
  newReview: {
    content: "This product is amazing! Highly recommend it.",
    rating: 5
  }
};

const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Positive review skipped.");
    },
    send: function() {
      console.log("Positive review posted to Slack!");
    }
  }
};

// Minimized logic
if (ReviewFeed.newReview.rating > 4) {
  Slack.postToChannel.send();
} else {
  Slack.postToChannel.skip();
}
