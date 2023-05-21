const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProductsById,
  getAllProducts,
  getProductByCategory,
  getProductsByAdditionalCategory,
} = require("../../controllers/products");
const { ctrlWrapper } = require("../../helpers");
const validation = require("../../middlewares/validation");
const { joiProductAddSchema } = require("../../schema/validationJoi");

router.get("/", ctrlWrapper(getAllProducts));

router.get("/:categoryName", ctrlWrapper(getProductByCategory));

router.get(
  "/category/:additionalCategory",
  ctrlWrapper(getProductsByAdditionalCategory)
);

router.get("/product/:id", ctrlWrapper(getProductsById));

router.post("/create", validation(joiProductAddSchema), ctrlWrapper(addProduct));

module.exports = router;
