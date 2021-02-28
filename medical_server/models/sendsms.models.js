var accountSid = 'AC01f65f08d7430a54b9b3a1bb5c277877'; // Your Account SID from www.twilio.com/console
var authToken = '2c659eeeeed48e8b8afe6b2d7aeb1fe7';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid,authToken);

const sendSmsModelFunction = {

    sendMessageModel : function(req,callback){
        console.log('In login otp of model');
        num = req.body.number
        msg = req.body.message
        console.log('number is ', num , 'message is ',msg);
        client.messages.create({
            body : msg,
            to : num,  // Text this number
            from: '+18329240191' // From a valid Twilio number
        },callback)
        .then((message) => console.log(message.sid));
    }
}

module.exports = sendSmsModelFunction;