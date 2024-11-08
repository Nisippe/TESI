const PostFeed = {
    newPost: {
      content: "Loving the weather today! #sunny #happy"
    }
  };
  
  const Slack = {
    postToChannel: {
      skip: function() {
        console.log("Post skipped due to lack of hashtags.");
      },
      send: function() {
        console.log("Post with hashtags sent to Slack!");
      }
    }
  };
  
  // Minimized logic
  if (PostFeed.newPost.content.includes("#")) {
    Slack.postToChannel.send();
  } else {
    Slack.postToChannel.skip();
  }
  