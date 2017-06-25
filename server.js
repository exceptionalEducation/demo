var http = require('http');
var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
//
// app.post('/sms', function(req, res) {
//     var twilio = require('twilio');
//     var twiml = new twilio.twiml.MessagingResponse();
//     twiml.message('The Robots are coming! Head for the hills!');
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
// });

app.post('/sms', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.twiml.MessagingResponse();
    if (req.body.Body == 'hello') {
            twiml.message('Hi!');
        } else if(req.body.Body == 'bye') {
            twiml.message('Goodbye');
        } else {
            twiml.message('No Body param match, Twilio sends this in the request to your server.');
        }
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
});

http.createServer(app).listen(1337, function () {
  console.log('Express server listening on port 1337');
});
