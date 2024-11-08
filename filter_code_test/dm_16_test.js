const Netatmo = {
  rainTodayAmount: {
    MeasuredAt: new Date(),
    MeasuredRainfallMM: 5
  }
};

const Netro = {
  reportWeather: {
    setDate: function(date) {
      console.log("Date set:", date);
    },
    setRain: function(rain) {
      console.log("Rain amount set:", rain);
    },
    setRainProb: function(probability) {
      console.log("Rain probability set:", probability);
    }
  }
};

Netro.reportWeather.setDate(Netatmo.rainTodayAmount.MeasuredAt);
Netro.reportWeather.setRain(Netatmo.rainTodayAmount.MeasuredRainfallMM);
Netro.reportWeather.setRainProb("100");
