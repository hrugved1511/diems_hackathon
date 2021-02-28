var express = require('express');

const router = express.Router();

var mailerController = require('../controllers/mailer.controllers');

router.post('/',function(req,res){
    console.log('In mailer route');
    mailerController.sendEmail(req,res);
});


module.exports = router;