require('dotenv').config();
const mysql =require('mysql2')


//create db connection

const pool = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"the_bradery"
});


module.exports = pool.promise(); 