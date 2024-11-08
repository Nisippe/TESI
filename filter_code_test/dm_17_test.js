const Meta = {
  getUserLocation: function() {
      return "New York";
  },
  getUserPreferences: function() {
      return {
          likesNotifications: true,
          emailUpdates: true,
          smsUpdates: false
      };
  }
};

const NotificationSystem = {
  sendNotification: function(message) {
      console.log("Notification sent: " + message);
  }
};

if (Meta.getUserPreferences().likesNotifications && Meta.getUserLocation() === "New York") {
  NotificationSystem.sendNotification("Hello, we have an update for you!");
}
