const Meta = {
currentUserTime: {
    hour: function() {
    return 8;
    }
}
};

const PhoneCall = {
callMyPhone: {
    skip: function(message) {
    console.log("Call skipped:", message);
    }
}
};

var hour = Meta.currentUserTime.hour();

if (hour < 22 && hour > 6) {
PhoneCall.callMyPhone.skip("Not during sleeping hours");
} else {
console.log("Calling during sleeping hours.");
}
