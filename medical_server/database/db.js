const mysql = require('mysql');

var connection = mysql.createConnection({
    //properties..
    host: 'database-1.cclk3daa4sqy.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'rootroot',
    database: 'medical' 
});

connection.connect(function(error) {
    if(error) {
        console.log('Error',error);
    } else {
        console.log('Connected');
    }
});

/*var connection = mysql.createPool({
    connectionLimit : 10,
    hostname: "freedb.tech", 
    user: 'freedb_chavanhrugved',
    password: 'hrugved@1511',
    database: 'freedb_medicaldb',
    
});*/

module.exports = connection;

/*
const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit : 10,
    hostname: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sih'
});

module.exports = connection;
 */