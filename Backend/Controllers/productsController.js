const Products = require('../Models/products')

const getAllProducts = async (req, res) => {
   try {
     const [products, _] = await Products.findAll();
     res.status(200).json({ products });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 };

const getProductById = async(req,res) =>{
   try {
    let productId = req.params.id;
    let [product, _] = await Products.findById(productId);
    res.status(200).json({product});

   } catch (error) {
    console.log(error);
   }
    
    }




    module.exports = {
        getAllProducts,
        getProductById
    }