const db = require('../database/db');

var loginFunctionModel = {
    industrylist : function(id,callback){
        console.log('In customer login model',id);

        return db.query('Select * from industry_farmer_product where farmer_name=? ',[id],callback);

    },

    householdlist : function(id,callback){
        console.log('In industry login model',id);

        return db.query('Select * from household_farmer_product where farmer_name=? ',[id],callback);
    },

    


}

module.exports=loginFunctionModel;