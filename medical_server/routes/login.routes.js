var express = require('express');

const router = express.Router();

var loginController = require('../controllers/login.controllers');

router.get('/customerlogin/:id',function(req,res){
    console.log('In customer login route',req);
    loginController.customerLogin(req,res);
})

router.get('/industrylogin/:id',function(req,res){
    console.log('In industrylogin login route',req);
    loginController.industryLogin(req,res);
})

router.get('/farmerlogin/:id',function(req,res){
    console.log('In farmerlogin login route',req);
    loginController.farmerLogin(req,res);
})


module.exports = router;
















/*router.get('/getmobilenumber/:id',function(req,res){
    console.log('In patient login route');
    loginController.patientLogin(req,res);
})

router.get('/doctor/:id',function(req,res){
    console.log('In doctor login route');
    loginController.doctorLogin(req,res);
})

router.get('/hospital/:id',function(req,res){
    console.log('In hospital login route');
    loginController.hospitalLogin(req,res);
})

router.get('/gov/:id',function(req,res){
    console.log('In gov login route');
    loginController.govLogin(req,res);
})*/

