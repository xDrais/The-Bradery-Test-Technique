const express = require("express");
const router = express.Router();

const {getAllProducts,getProductById} = require('../Controllers/productsController');

//@desc Get all the products from DB
//@route Get /api/products
//@acess Public
router.route("/").get(getAllProducts)

//@desc Get a product by id from DB
//@route Get /api/products/:id
//@acess Public
router.route("/:id").get(getProductById)



module.exports = router;