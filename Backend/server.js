require("dotenv").config();
const express = require("express");
const connection = require("./Config/database.js")
const productsRoutes = require('./Routes/productsRoutes')
const cors = require('cors');
const passport = require('passport')
//connect to db
connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("db connected");
});

const app = express();


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) //


app.use(express.json());

app.use('/api/products',productsRoutes)



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`)) 