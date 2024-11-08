const GoogleCalendar = {
newEventAdded: {
    Starts: "9:00 AM",
    Ends: "10:00 AM"
},
addDetailedEvent: {
    skip: () => console.log("Event skipped."),
    setDescription: (description) => console.log(`Description set: ${description}`),
    setAllDay: (isAllDay) => console.log(`All-day set: ${isAllDay}`),
    setStartTime: (startTime) => console.log(`Start time set: ${startTime}`),
    setEndTime: (endTime) => console.log(`End time set: ${endTime}`)
}
};

GoogleCalendar.addDetailedEvent.setDescription("In the office from " 
    + GoogleCalendar.newEventAdded.Starts 
    + " to " + GoogleCalendar.newEventAdded.Ends);
GoogleCalendar.addDetailedEvent.setAllDay("true");
GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.Starts);
GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.Ends);
