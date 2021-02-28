const registerFunction = require('../controllers/register.controllers');
const db = require('../database/db');

var registerFunctionModel = {
    customerRegisterModel : function(req,callback){
        console.log('In customer login model',req);

        //return db.query('Select * from customer_login where username=?',[id],callback);

    },

    industryRegisterModel : function(req,callback){
        console.log('In industry login model',req);

        //return db.query('Select * from industry_login where username=?',[id],callback);
    },

    farmerRegisterModel : function(req,callback){
        console.log('In farmer login model',req);

        //return db.query('Select * from farmer_login where username=?',[id],callback);
    },


}

module.exports=registerFunctionModel;