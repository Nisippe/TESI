const Meta = {
currentUserTime: {
    hour: function() {
    return 23; 
    }
}
};

const IfNotifications = {
sendNotification: {
    skip: function() {
    console.log("Notification skipped due to late/early hour.");
    }
}
};

const Email = {
sendMeEmail: {
    skip: function() {
    console.log("Email skipped because it's within notification hours.");
    }
}
};

var hour = Meta.currentUserTime.hour();

if (hour >= 22 || hour <= 8) {
IfNotifications.sendNotification.skip();
} else {
Email.sendMeEmail.skip();
}
