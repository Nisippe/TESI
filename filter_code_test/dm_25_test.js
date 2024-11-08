// Mocking the GoogleCalendar object
const GoogleCalendar = {
    eventFromSearchStarts: {
        Title: "Meeting with team",
        collectData: function(data) {
        console.log("Event Data Collected: ", data);
        }
    }
    };
    
    // Mocking the Ecobee object
    const Ecobee = {
    climateNextTransition: {
        skip: function() {
        console.log("Climate transition skipped.");
        }
    }
    };

if (GoogleCalendar.eventFromSearchStarts.Title.toUpperCase() != "WORK") {
    Ecobee.climateNextTransition.skip()
    GoogleCalendar.eventFromSearchStarts.collectData({
    eventTitle: GoogleCalendar.eventFromSearchStarts.Title
    })
}
