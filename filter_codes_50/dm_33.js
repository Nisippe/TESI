const Meta = {
triggerTime: {
    add: function(hours, unit) {
    const now = new Date();
    now.setHours(now.getHours() + hours);
    return {
        format: function(formatString) {
        const options = {
            month: "numeric", day: "numeric", year: "numeric", 
            hour: "numeric", minute: "numeric", hour12: true
        };
        return now.toLocaleString("en-US", options);
        }
    };
    }
}
};

const IosReminders = {
createReminderIosReminders: {
    setAlarmDate: function(dateString) {
    console.log("Reminder set for:", dateString);
    }
}
};

var reminderTime = Meta.triggerTime.add(2, 'h');
IosReminders.createReminderIosReminders.setAlarmDate(
reminderTime.format("M/DD/YYYY") + " at " + reminderTime.format("h:mm A")
);
