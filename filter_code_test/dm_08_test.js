// Mocking Feed.newFeedItem.EntryTitle
var Feed = {
newFeedItem: {
    EntryTitle: "Earthquake Alert: Magnitude 6.0 detected in the area."
}
};

// Mocking Telegram.sendMessage.skip() functionality
var Telegram = {
sendMessage: {
    skip: function() {
        console.log("Message skipped.");
    }
}
};

var Texto = Feed.newFeedItem.EntryTitle;
var magnitude = 6.0;
if (Texto.includes(magnitude.toFixed(1)) || Texto.includes(magnitude.toString())) {
    console.log("Earthquake magnitude found:", magnitude.toFixed(1));
} else {
    while (magnitude < 10.0) {
        magnitude = parseFloat((magnitude + 0.1).toFixed(1));
        if (Texto.includes(magnitude.toFixed(1)) || Texto.includes(magnitude.toString())) {
            console.log("Earthquake magnitude found:", magnitude.toFixed(1));
            break;
        }

        if (magnitude >= 9.9) {
            Telegram.sendMessage.skip();
            break;
        }
    }
}
