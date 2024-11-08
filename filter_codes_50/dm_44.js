const Meta = {
currentUserTime: {
    hour: () => 10
}
};

const VoipCalls = {
callMyDevice: {
    skip: (hour) => console.log("Call skipped due to hour:", hour),
    setMessage: (message) => console.log("Message set:", message)
}
};

var hour = Meta.currentUserTime.hour();

if (hour > 8 && hour < 21) {
VoipCalls.callMyDevice.skip(hour.toString());
} else {
VoipCalls.callMyDevice.setMessage("motion detected!");
}
