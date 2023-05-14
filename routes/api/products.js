const express = require("express");
const router = express.Router();
const {
  getProductsById,
  getAllProducts,
  getProductByCategory,
  getProductsByAdditionalCategory,
} = require("../../controllers/products");
const {ctrlWrapper} = require("../../helpers")

router.get("/", ctrlWrapper(getAllProducts));

router.get("/:categoryName", ctrlWrapper(getProductByCategory));

router.get("/:additionalCategory", ctrlWrapper(getProductsByAdditionalCategory));

router.get("/:categoryName/:id", ctrlWrapper(getProductsById));

module.exports = router;
