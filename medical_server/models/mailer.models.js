const nodemailer = require('nodemailer');


const mailModelFunction = {

    emailModel : function(req,callback){
        console.log('In email model');
        var email = req.body.email;
        var msg = req.body.text;
        var sub = req.body.subject;
        console.log(email," ",msg," ",sub);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'developertesting1511@gmail.com',
              pass: 'testing@1511'
            }
          });
          
          var mailOptions = {
            from: 'developertesting1511@gmail.com',
            to: email,
            subject: sub,
            text: msg
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    }
}


module.exports = mailModelFunction;