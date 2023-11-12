require("dotenv").config();
const express = require("express");
const connection = require("./Config/database.js")
const productsRoutes = require('./Routes/productsRoutes')


connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("db connected");
});

const app = express();

app.use(express.json());

app.use('/api/products',productsRoutes)



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`)) 