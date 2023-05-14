const { Products } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsByAdditionalCategory = async (req, res) => {
  const { additionalCategory } = req.params;

  const products = await Products.find({ category: additionalCategory }).sort({
    createdAt: -1,
  });

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(products);
};

module.exports = getProductsByAdditionalCategory;
