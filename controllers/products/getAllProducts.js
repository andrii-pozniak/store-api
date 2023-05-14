const { Products } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getAllProducts = async (req, res) => {
  const products = await Products.find().sort({ createdAt: -1 });

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(products);
};

module.exports = getAllProducts;
