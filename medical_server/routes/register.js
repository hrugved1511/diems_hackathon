var express = require('express');

const router = express.Router();

var registerController = require('../controllers/register.controllers');

router.post('/customerregister',function(req,res){
    console.log('In customer login route',req);
    loginController.customerLogin(req,res);
})
router.post('/industryregister',function(req,res){
    console.log('In customer login route',req);
    loginController.customerLogin(req,res);
})
router.post('/farmerregister',function(req,res){
    console.log('In customer login route',req);
    loginController.customerLogin(req,res);
})

module.exports = router;