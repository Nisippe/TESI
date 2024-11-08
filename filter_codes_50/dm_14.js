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

var title = Feed.newFeedItemMatches.EntryTitle;
var start = title.indexOf("'") + 1;
var end = title.lastIndexOf("'");
var cleanTitle = title.slice(start, end);

var note = Feed.newFeedItemMatches.EntryContent;
var linkStart = note.indexOf("show/") + 6; 
var linkEnd = linkStart + 5; 
var baseUrl = "https://www.goodreads.com/buy_buttons/12/follow?book_id=";
var bookId = note.slice(linkStart, linkEnd); 

Todoist.createTask.setTaskContent(cleanTitle);
Todoist.createTask.setNote(baseUrl + bookId);
