const mysql2 =require('mysql2')

// a pool of connections
/*const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"the_bradery",
    connectionLimit: 10
})
*/

//create db connection

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"the_bradery"
});




// testing data base connection
/*connection.query(`select * from products`,(err,result , fields)=>{
if(err){
    return console.log(err);
}
return console.log(result)
})*/

module.exports = connection; 