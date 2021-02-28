const mysql = require('mysql');

var connection = mysql.createConnection({
    //properties..
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'diemshackthon' 
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
    database: 'diemshackthon'
});

module.exports = connection;
 */