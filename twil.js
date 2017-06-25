require('dotenv').config();

var twilio = require('twilio');
var client = new twilio(process.env.accountSid, process.env.authToken);


function startingMessage(){
  client.messages.create({
      body: `Hey it's little bird from Hogwarts Elementary! Your child's IEP review is coming up. What days during the week of September 4th would you be available to meet for an hour? For example, type 'Monday, Tuesday and Wednesday'`,
      to: '+18043473241',  // Text this number
      from: '+18042982615' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}

function timeOfDayMessage(){
  client.messages.create({
      body: `Great! Do mornings or afternoons tend to work better for you?`,
      to: '+18043473241',  // Text this number
      from: '+18042982615' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}

function preDoodleMessage(){
  client.messages.create({
      body: `Awesome! We will be in touch soon with potential times.`,
      to: '+18043473241',  // Text this number
      from: '+18042982615' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}

function confirmationMessage(){
  client.messages.create({
    body: `Hey it's little bird again! Which of these three times is best for Jane's IEP review?
    Please type one of the following numbers:
    1. Monday, September 4th at 3 PM
    2. Tuesday, September 5th at 8 AM
    3. Tuesday, September 5th at 11 AM
    4. None of these times work for me`,
    to: '+18043473241',  // Text this numbery
    from: '+18042982615' // From a valid Twilio number
    })
}


module.exports={
  startingMessage,
  timeOfDayMessage,
  preDoodleMessage,
  confirmationMessage
};
//startingMessage();
//timeOfDayMessage();
// confirmationMessage();
// thankYouMessage();

//SM9cbf925a76c34244bab4fd8a86b2fedf
