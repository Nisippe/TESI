const Meta = {
currentUserTime: {
    hour: function() {
    return 20;
    }
}
};

const Gmail = {
sendAnEmail: {
    skip: function(message) {
    console.log("Email skipped:", message);
    }
}
};

var hour = Meta.currentUserTime.hour();

if (hour > 18) {
Gmail.sendAnEmail.skip("Too Late");
}

if (hour < 5) {
Gmail.sendAnEmail.skip("Too Early");
}
