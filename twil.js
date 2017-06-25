require('dotenv').config();

var twilio = require('twilio');
var client = new twilio(process.env.accountSid, process.env.authToken);

console.log('here');
console.log(process.env.accountSid);
console.log(process.env.authToken);
client.messages.create({
    body: 'Hello from Node',
    to: '+18043473241',  // Text this number
    from: '+18042982615' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
