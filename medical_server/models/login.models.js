const db = require('../database/db');

var loginFunctionModel = {
    customerLoginModel : function(id,callback){
        console.log('In customer login model',id);

        return db.query('Select * from customer_login where username=?',[id],callback);

    },

    industryLoginModel : function(id,callback){
        console.log('In industry login model',id);

        return db.query('Select * from industry_login where username=?',[id],callback);
    },

    farmerLoginModel : function(id,callback){
        console.log('In farmer login model',id);

        return db.query('Select * from farmer_login where username=?',[id],callback);
    },


}

module.exports=loginFunctionModel;