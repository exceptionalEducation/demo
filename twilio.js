var accountSid = 'ACc71efe287963381a331670fd48bbbf3d'; // Your Account SID from www.twilio.com/console
var authToken = 'dcefdcfe799de453bcaf65bbc4641adb';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+18043473241',  // Text this number
    from: '+18042982615' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
