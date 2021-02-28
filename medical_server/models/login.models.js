const db = require('../database/db');

var loginFunctionModel = {
    customerLoginModel : function(id,callback){
        console.log('In customer login model',id);

        return db.query('Select * from customerdetails where mobile_number=?',[id],callback);

    },

    industryLoginModel : function(id,callback){
        console.log('In industry login model',id);

        return db.query('Select * from industrydetails where industry_name=?',[id],callback);
    },

    farmerLoginModel : function(id,callback){
        console.log('In farmer login model',id);

        return db.query('Select * from farmerdetails where mobile_number=?',[id],callback);
    },


}

module.exports=loginFunctionModel;