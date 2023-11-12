const mongoose = require ('mongoose')

const ProductsSchema = new mongoose.Schema({
    id : {type : Number , required:true, unique: true},
    name: {type: String,required:true},
    price: {type:Number,required:true},
    inventory: {type:String,required:true},
    imgPATH: {type:String,required:true} ,
})
module.exports = mongoose.model('Products', ProductsSchema)