const Email = {
    notification: {
      sender: "example@example.com",
      subject: "Daily Report"
    }
  };
  
  if (Email.notification.sender.includes("@example.com") && 
      Email.notification.subject.includes("Report")) {
    console.log("Email notification sent.");
  } else {
    console.log("Email notification skipped.");
  }
  