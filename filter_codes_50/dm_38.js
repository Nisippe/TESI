const Strava = {
newActivityByYou: {
    DistanceMeters: "5000"
}
};

const Monzo = {
potWithdraw: {
    setAmount: function(amount) {
    console.log("Amount set for withdrawal:", amount);
    }
}
};

var distance = parseInt(Strava.newActivityByYou.DistanceMeters);
var amount = distance / 1000;
Monzo.potWithdraw.setAmount(amount.toFixed(2));
