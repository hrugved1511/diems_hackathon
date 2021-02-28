

const mailerModel = require('../models/mailer.models');

var mailFunction = {

    sendEmail : function(req,res){
        console.log('In send mail in controller');
        mailerModel.emailModel(req,function(err,data){
            if(err){
                console.log('Error in sending mail',err);
            }else{
                console.log('No error in sending email',data);
            }
        })
    }
}

module.exports = mailFunction;