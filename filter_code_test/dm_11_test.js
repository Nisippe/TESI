// Mock of Twitter and Slack objects
const Twitter = {
  newTweetByUser: {
    Text: "This is an example tweet about Struts"
  }
};

const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Tweet skipped due to content restrictions.");
    }
  }
};

if (Twitter.newTweetByUser.Text.indexOf('Struts') !== -1) {
  Slack.postToChannel.skip();
}
