const { Product } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsByAdditionalCategory = async (req, res) => {
  const { additionalCategory } = req.params;

  const products = await Product.find({ additionalCategory: additionalCategory }).sort({
    createdAt: -1,
  });

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(products);
};

module.exports = getProductsByAdditionalCategory;
