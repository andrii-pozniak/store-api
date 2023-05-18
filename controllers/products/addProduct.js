const {Product} = require("../../schema/ProductsModel");

const addProduct = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;
try {
    const newProduct = await Product.create({
        ...body, 
        imageURL: req?.file?.path,
        _id: id,
      });
      res.status(201).json(newProduct); 
} catch (error) {
    next(error);
}

  
};

module.exports = addProduct;