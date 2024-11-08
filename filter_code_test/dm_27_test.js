const Trigger = {
DeviceName: "Phone - Samsung Galaxy"
};

const AndroidDevice = {
setDeviceVolume: {
    skip: function(message) {
    console.log("Volume adjustment skipped:", message);
    }
}
};

if (Trigger.DeviceName.indexOf("Gear") == -1) {
AndroidDevice.setDeviceVolume.skip("Déconnection non due à la montre");
} else {
console.log("Device connected: action allowed.");
}
