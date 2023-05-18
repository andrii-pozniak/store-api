const { Product } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsByCategory = async (req, res) => {
  const { categoryName } = req.params;

  const products = await Product.find({ categoryName: categoryName }).sort({
    createdAt: -1,
  });

  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

module.exports = getProductsByCategory;
