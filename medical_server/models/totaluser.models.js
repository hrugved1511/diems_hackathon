const db = require('../database/db');

var loginFunctionModel = {
    customerCountModel : function(id,callback){
        console.log('In customer login model',id);

        return db.query('Select count(mobile_number) from customerdetails as count',callback);

    },

    industryCountModel : function(id,callback){
        console.log('In industry login model',id);

        return db.query('Select count(mobile_number) from industrydetails as count ',callback);
    },

    farmerLoginModel : function(id,callback){
        console.log('In farmer login model',id);

        return db.query('Select count(mobile_number) from farmer_login as count',callback);
    },


}

module.exports=loginFunctionModel;