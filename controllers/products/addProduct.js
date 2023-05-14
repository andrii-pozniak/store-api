const {Products} = require("../../schema/ProductsModel");

const addProduct = async (req, res) => {
  const { body } = req;
  const { _id } = req.product;

  const newProduct = await Products.create({
    ...body,
    imageURL: req?.file?.path,
    id: _id,
  });

  res.status(201).json(newProduct);
};

module.exports = addProduct;