var http = require('http');
var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');

var app = express();

var texts = require('./twil.js');

require('dotenv').config();

var client = new twilio(process.env.accountSid, process.env.authToken);


app.use(bodyParser.urlencoded({extended:false}));
//
// app.post('/sms', function(req, res) {
//     var twilio = require('twilio');
//     var twiml = new twilio.twiml.MessagingResponse();
//     twiml.message('The Robots are coming! Head for the hills!');
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
// });

texts.confirmationMessage();
app.post('/sms', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.twiml.MessagingResponse();
    if(!isNaN(req.body.Body)){
      let response = req.body.Body;
      let body = '';
      switch (true) {
        case response.includes('1'):
            body = 'Thanks for confirming! Mr. Wybrant is looking forward to seeing you Monday, September 4th at 3 PM.';
          break;
        case response.includes('2'):
            body = 'Thanks for confirming! Mr. Wybrant is looking forward to seeing you Tuesday, September 5th at 8 AM.';
          break;
        case response.includes('3'):
            body = 'Thanks for confirming! Mr. Wybrant is looking forward to seeing you Tuesday, September 5th at 11 AM.';
          break;
        default:
            body = 'Please either choose one option from above or contact Mr. Wybrant at 202-999-9999';
          break;
        }
      client.messages.create({
        body: `${body}`,
        to: '+18043473241',  // Text this numbery
        from: '+18042982615' // From a valid Twilio number
      });
    } else{
      client.messages.create({
        body: `Please either choose one option from above or contact Mr. Wybrant at 202-999-9999`,
        to: '+18043473241',  // Text this numbery
        from: '+18042982615' // From a valid Twilio number
      });
    }
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
});



http.createServer(app).listen(1337, function () {
  console.log('Express server listening on port 1337');
});
