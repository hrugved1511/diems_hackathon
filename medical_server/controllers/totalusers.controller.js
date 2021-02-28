const express = require('express');

const loginModel = require('../models/totaluser.models');

var loginFunction = {

    customerCount : function(req,res){
        console.log('in patient login controller');
        /*customer_user = req.params.id;
        console.log('esure is ',customer_user);*/
         //username = CryptoJS.AES.decrypt(euser,secretKey.trim()).toString(CryptoJS.enc.Utf8)
        //console.log('decrypted on server username is ',username);

        loginModel.customerCountModel(req.params.id,function(err,data){
            if(err){
                
                console.log("error in patient login, error is :: ",err);
                res.status(500).send({status: false, data:err});
            }else{
                
                console.log('no erro in patient login , user data is ',data);
                res.status(200).send({status: true, data:data});
            }
        })
    },

    industryCount : function(req,res){
        console.log('In doctor login controller');
        loginModel.industryCountModel(req.params.id,function(err,data){
            if(err){
                
                console.log("error in doctor login, error is :: ",err);
                
            }else{
                
                console.log('no erro in doctor login , user data is ',data);
                res.status(200).send({status: true, data:data});
            }
        })
    },

    farmerCount : function(req,res){
        console.log('In hospital login controller');
        loginModel.farmerLoginModel(req.params.id,function(err,data){
            if(err){
                
                console.log("error in hospital login, error is :: ",err);
                
            }else{
                
                console.log('no erro in hospital login , user data is ',data);
                res.status(200).send({status: true, data:data});
            }
        })
    },


}


module.exports= loginFunction;