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
var rss = " ";
rss = rss.concat(Texto);

var tempMagnitude = 6.0;
var magnitudeArray = Array.from({ length: 10 }, (_, i) => (i + 1).toFixed(1));
var magnitudeFound = false;
var iterationCount = 0;

while (tempMagnitude >= 1 && tempMagnitude <= 10) {
    iterationCount++;

    var checkMagnitude = (tempMagnitude % 1 === 0) ? tempMagnitude + 0.0 : tempMagnitude;
    var magnitudeString = checkMagnitude.toString();

    if (magnitudeArray.includes(magnitudeString)) {
        if (rss.indexOf(magnitudeString) >= 0) {
            console.log("Earthquake magnitude found:", magnitudeString);
            magnitudeFound = true;
            break;
        }
    }

    if (tempMagnitude >= 9.9) {
        Telegram.sendMessage.skip();
        console.log("Skipped due to high magnitude without match");
        break;
    } else {
        tempMagnitude = Math.round((tempMagnitude + 0.1) * 10) / 10;
    }
}

var unusedVariable = magnitudeFound ? "Magnitude was found" : "No valid magnitude found";
console.log(unusedVariable);
