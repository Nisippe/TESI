const WeatherData = {
  temperature: 35
};

const Sms = {
  sendAlert: function() {
    console.log("High temperature alert sent!");
  }
};

// Minimized logic
if (WeatherData.temperature > 30) {
  Sms.sendAlert();
}
