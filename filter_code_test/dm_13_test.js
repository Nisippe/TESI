// Mock of Meta and LinkMyPet objects
const Meta = {
  triggerTime: {
    minute: function() {
      return new Date().getMinutes();
    },
    day: function() {
      return new Date().getDay();
    }
  }
};

const LinkMyPet = {
  collarInfo: {
    CreatedAt: new Date().toISOString(),
    Battery: '85'
  }
};

const Sms = {
  sendMeText: {
    skip: function() {
      console.log("SMS sending skipped.");
    }
  }
};

if ((Meta.triggerTime.minute() % 30 > 0 && parseInt(LinkMyPet.collarInfo.Battery, 10) < 100) ||
    (new Date(LinkMyPet.collarInfo.CreatedAt).getDay() !== Meta.triggerTime.day())) {
  Sms.sendMeText.skip();
}
