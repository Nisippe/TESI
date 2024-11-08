const CommentsFeed = {
  comments: [
    { Content: "This is a great post!" },
    { Content: "I disagree with this." }
  ]
};

const Notifications = {
  sendNotification: function(message) {
    console.log("Notification sent: " + message);
  }
};

CommentsFeed.comments.forEach(comment => {
  Notifications.sendNotification(`New comment: ${comment.Content}`);
});
