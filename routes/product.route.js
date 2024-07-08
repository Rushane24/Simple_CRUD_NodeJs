const express = require("express");
const router = express.Router();
const model = require('../controllers/product.controller.js');


router.get('/', model.getProducts);
router.get("/:id", model.getProduct);

router.post("/", model.createProduct);

router.put("/:id", model.updateProduct);

router.delete("/:id", model.deleteProduct);




module.exports = router;