// Mock of Twitter and Email objects
const Twitter = {
    newTweetByUser: {
      Text: "#bitcoincash #bch Price: $5000 24hChg: 15% 24Vol"
    }
  };
  
  const Email = {
    sendMeEmail: {
      skip: function() {
        console.log("Email skipped due to format or conditions.");
      }
    }
  };
  
  function filter() {
    const coinLabel = "#bitcoincash #bch Price: $";
    const prefix = " 24hChg: ";
    const suffix = "% 24Vol";
    let tweetText = Twitter.newTweetByUser.Text;
  
    let startIndex = tweetText.indexOf(prefix);
    let endIndex = tweetText.indexOf(suffix);
    let isCoinLabelValid = tweetText.indexOf(coinLabel) === 0;

    if (!isCoinLabelValid || startIndex < 0 || endIndex < 0) {
      let skipReason = isCoinLabelValid ? 
                       "Missing change or volume information." : 
                       "Incorrect coin label.";
      console.log(skipReason);
      Email.sendMeEmail.skip();
      return;
    }
  
    startIndex += prefix.length;
    let changeValueString = tweetText.substr(startIndex, endIndex - startIndex);
    let changeValue = parseFloat(changeValueString);
    let isChangeSignificant = Math.abs(changeValue) < 10.0;
  
    if (isChangeSignificant) {
      console.log("Change is not significant enough.");
      Email.sendMeEmail.skip();
      return;
    }
  }
  
  filter();
  