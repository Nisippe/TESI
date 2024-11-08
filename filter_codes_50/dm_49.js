const Meta = {
currentUserTime: {
    hour: function() {
    return 5;
    }
}
};

const Inoreader = {
markFolderAsRead: {
    skip: function() {
    console.log("Skipping mark as read - hour does not match specified intervals.");
    }
}
};

var hour = Meta.currentUserTime.hour();

if (hour !== 0 && hour !== 3 && hour !== 6 && hour !== 9 &&
    hour !== 12 && hour !== 15 && hour !== 18 && hour !== 21) {
Inoreader.markFolderAsRead.skip();
}
