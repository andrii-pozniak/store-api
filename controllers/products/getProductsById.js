const {Product} = require("../../schema/ProductsModel");
const { HttpError } = require("../../helpers/apiHelper");

const getProductsById = async(req, res) => {

    
    if (!req.params.id) {
        res.status(400).json({ error: "Missing ID parameter" });
        return;
      }
      const { id } = req.params;
    const result = await Product.findById( id, "-__v" );

    if (!result) {
        throw HttpError(404, "Not found");
     
    };
    res.status(200).json(result);
};

module.exports = getProductsById;