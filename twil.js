require('dotenv').config();

var twilio = require('twilio');
var client = new twilio(process.env.accountSid, process.env.authToken);


function startingMessage(){
  client.messages.create({
      body: `Hey it's little bird from Hogwarts Elementary! Your child's IEP review is coming up. Are there any days during the week of September 4th that you are NOT available? (e.g. Monday, Wednesday)`,
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

module.exports={
  startingMessage,
  timeOfDayMessage,
  preDoodleMessage
};
//startingMessage();
//timeOfDayMessage();
// confirmationMessage();
// thankYouMessage();

//SM9cbf925a76c34244bab4fd8a86b2fedf
