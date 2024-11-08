// Mocking the Caavo object
const Caavo = {
voiceSearch: {
    Text: "Can you set the temperature to 72 degrees?"
}
};

// Mocking the Ecobee object
const Ecobee = {
holdHoldhours: {
    skip: function() {
    console.log("Skipping temperature setting as the query doesn't include 'set the temperature'.");
    }
}
};

// Mocking localStorage functionality
const localStorage = {
store: {},
setItem: function(key, value) {
    this.store[key] = value;
    console.log(`Stored in localStorage: ${key} = ${value}`);
},
getItem: function(key) {
    return this.store[key];
}
};


let userQuery = Caavo.voiceSearch.Text.toLowerCase();
localStorage.setItem('userQuery', userQuery);

if (userQuery.indexOf("set the temperature") < 0) {
Ecobee.holdHoldhours.skip();
}
