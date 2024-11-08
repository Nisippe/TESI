const Feed = {
  newFeedItem: {
    EntryContent: "This is a sample entry from 東京"
  }
};

const Slack = {
  postToChannel: {
    skip: function() {
      console.log("Slack post skipped because the content does not match the keywords.");
    },
    send: function() {
      console.log("Message posted to Slack!");
    }
  }
};

// Main code
var s = Feed.newFeedItem.EntryContent;

if (s.match(/(東京|神奈川|横浜)/)) {
  Slack.postToChannel.send();  
} else {
  Slack.postToChannel.skip(); 
}
