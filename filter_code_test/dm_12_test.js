const Twitter = {
    newTweetByUser: {
        Text: "This is a sample tweet text without the target phrase."
    }
};

const Line = {
    sendMessage: {
        skip: function() {
            console.log("Message skipped.");
        }
    }
};

//Main code
if (Twitter.newTweetByUser.Text.indexOf("技科大前支店") === -1) 
    Line.sendMessage.skip();
