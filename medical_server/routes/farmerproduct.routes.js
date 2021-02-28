var express = require('express');

const router = express.Router();

var loginController = require('../controllers/farmerproduct.contorller');

router.get('/industrylist/:id',function(req,res){
    console.log('In customer login route',req);
    loginController.industryList(req,res);
})

router.get('/householdlist/:id',function(req,res){
    console.log('In industrylogin login route',req);
    loginController.householdList(req,res);
})



module.exports = router;


















