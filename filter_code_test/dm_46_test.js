const Meta = {
currentUserTime: {
    hour: function() {
    return 6;
    }
}
};

const Clicksend = {
sendSms: {
    skip: function() {
    console.log("SMS skipped due to non-allowed hours.");
    }
}
};

var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 5 || timeOfDay < 9) {
Clicksend.sendSms.skip();
}
