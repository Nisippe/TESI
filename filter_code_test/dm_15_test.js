const Meta = {
  triggerTime: {
    minute: function() {
      return new Date().getMinutes();
    }
  }
};

const PhoneCall = {
  callMyPhone: {
    skip: function() {
      console.log("Phone call skipped.");
    }
  }
};

if (Meta.triggerTime.minute() % 15 === 0) {
  PhoneCall.callMyPhone.skip();
}
