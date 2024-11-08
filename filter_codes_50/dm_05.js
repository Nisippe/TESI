const WeatherData = {
    temperature: 35,
    location: "Tokyo",
    humidity: 80,
  };
  
const Sms = {
  sendAlert: function() {
    console.log("High temperature alert sent!");
  }
};

if (WeatherData.temperature > 30) {
  console.log(`Temperature recorded in ${WeatherData.location}: ${WeatherData.temperature}, humidity: ${WeatherData.humidity}`);
  Sms.sendAlert();
}
