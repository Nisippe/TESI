const Feed = {
  newFeedItemMatches: {
    EntryTitle: "'A Great Book Title'",
    EntryContent: 'Check out this book <a href="/book/show/12345">here</a>.'
  }
};

const Todoist = {
  createTask: {
    setTaskContent: function(content) {
      console.log("Task Content: " + content);
    },
    setNote: function(note) {
      console.log("Note: " + note);
    }
  }
};

Todoist.createTask.setTaskContent(Feed.newFeedItemMatches.EntryTitle.slice(1, Feed.newFeedItemMatches.EntryTitle.lastIndexOf("'")));
Todoist.createTask.setNote("https://www.goodreads.com/buy_buttons/12/follow?book_id=" + Feed.newFeedItemMatches.EntryContent.slice(Feed.newFeedItemMatches.EntryContent.indexOf("show/") + 6, Feed.newFeedItemMatches.EntryContent.indexOf("\">")));
