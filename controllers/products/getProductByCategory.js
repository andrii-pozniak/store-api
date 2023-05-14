const { Products } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsByCategory = async (req, res) => {
  const { categoryName } = req.params;

  const products = await Products.find({ category: categoryName }).sort({
    createdAt: -1,
  });

  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

module.exports = getProductsByCategory;
