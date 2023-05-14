const {Products} = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsById = async(req, res) => {

    const { id } = req.params;

    const products = await Products.findById({ id });

    if (!products) {
        res.status(404).json({
          message: "Not found",
        });
    };
    res.status(200).json(products);
};

module.exports = getProductsById;