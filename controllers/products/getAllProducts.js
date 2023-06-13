const { Product } = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getAllProducts = async (req, res) => {
  
  const products = await Product.find().sort({ createdAt: -1 });

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(products);
};

module.exports = getAllProducts;

// const getAllProducts = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 4;

//   const skip = (page - 1) * limit;

//   try {
//     const totalCount = await Product.countDocuments();
//     const products = await Product.find()
//       .sort({ createdAt: -1 })
//       .skip()
//       .limit();

//     if (!products) {
//       throw HttpError(404, "Not found");
//     }
//     const totalPages = Math.ceil(totalCount / limit);

//     res.status(200).json({
//       products,
//       totalPages,
//       currentPage: page,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };