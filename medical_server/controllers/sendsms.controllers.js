const express = require('express');

const sendsmsModel = require('../models/sendsms.models');


var sendSmsFunction = {

    sendMessage : function(req,res){
        console.log('in login otp controller');
        sendsmsModel.sendMessageModel(req,function(err,data){
            if(err){
                console.log('error is sending message and error is ',err);
            }else{
                console.log('message send successfully',data);
                res.status(200).send({status: true, data:data});
            }
        })
    }

}

module.exports = sendSmsFunction;