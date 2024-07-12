const express = require("express");
const { GetAllProducts, AddProduct ,createProduct, deleteProduct} = require("./ProductController");
const router = express.Router();
const auth = require("./middleware/authorization");

router.get("/getallproduct/", GetAllProducts);
// router.post("/addproduct", auth, AddProduct);
router.post("/createproducts", createProduct);
router.delete('/products/:id',auth, deleteProduct);

module.exports = router;
      