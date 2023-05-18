const getProductsById = require("./getProductsById");
const getAllProducts = require("./getAllProducts");
const getProductByCategory = require("./getProductByCategory");
const getProductsByAdditionalCategory = require("./getProductsByAdditionalCategory");
const addProduct = require("./addProduct");

module.exports = {
  addProduct,
  getProductsById,
  getAllProducts,
  getProductByCategory,
  getProductsByAdditionalCategory,
};
