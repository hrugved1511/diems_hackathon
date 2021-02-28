var express = require('express');

const router = express.Router();

var loginController = require('../controllers/totalusers.controller');

router.get('/customercount',function(req,res){
    console.log('In customer login route',req);
    loginController.customerCount(req,res);
})
router.get('/farmercount',function(req,res){
    console.log('In customer login route',req);
    loginController.farmerCount(req,res);
})
router.get('/industrycount',function(req,res){
    console.log('In customer login route',req);
    loginController.industryCount(req,res);
})

module.exports = router;
