// Mocking WemoInsightSwitch object
const WemoInsightSwitch = {
attributeINSIGHTONN: {
    SwitchName: "Living Room Light",
    SwitchedOnAt: "November 05 2024 08:00:00 pm"
}
};

// Mocking Meta object
const Meta = {
currentUserTime: {
    format: function(formatString) {
    return new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' });
    }
},
triggerTime: {
    format: function(formatString) {
    return new Date().toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'long' });
    }
},
currentUserLocation: "New York, USA",
currentUserDeviceInfo: "iPhone 12 Pro Max"
};

// Mocking GoogleSheets object
const GoogleSheets = {
appendToGoogleSpreadsheet: {
    setFormattedRow: function(rowData) {
    console.log("Appending to Google Sheets: ", rowData);
    }
}
};


var event = 'On';
var sname = WemoInsightSwitch.attributeINSIGHTONN.SwitchName;
var eventAt = WemoInsightSwitch.attributeINSIGHTONN.SwitchedOnAt;
var codeRanTime = Meta.currentUserTime.format('MMMM DD YYYY hh:mm:ss a');
var triggerTime = Meta.triggerTime.format('MMMM DD YYYY hh:mm:ss a');
var userLocation = Meta.currentUserLocation;
var deviceInfo = Meta.currentUserDeviceInfo;

var rowData = sname + '|||' + event + '|||' + eventAt + '|||=DATEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))+TIMEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))|||' + codeRanTime + '|||=DATEVALUE("' + codeRanTime + '")+TIMEVALUE("' + codeRanTime + '")|||' + triggerTime + '|||=DATEVALUE("' + triggerTime + '")+TIMEVALUE("' + triggerTime + '")|||' + userLocation + '|||' + deviceInfo;
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(rowData);
