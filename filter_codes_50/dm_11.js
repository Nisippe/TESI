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

  var tweetText = Twitter.newTweetByUser.Text;
  var tweetWords = tweetText.split(' ');
  
  var isRelevant = tweetWords.map(word => word.toLowerCase()).indexOf('struts') !== -1;
  
  if (isRelevant) {
    let additionalCheck = tweetText.length > 20;
    if (additionalCheck) {
      Slack.postToChannel.skip();
    }
  }
  