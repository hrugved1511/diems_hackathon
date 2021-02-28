var express = require('express');

const router = express.Router();

var sendsmsController = require('../controllers/sendsms.controllers');


router.post('/',function(req,res){
    console.log('In send sms in routes');
    sendsmsController.sendMessage(req,res);
});



module.exports = router;