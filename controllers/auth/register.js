const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../schema/UserModel");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const register = async(req, res, next) => {
    const { lastName, name, email, password, phone } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(409).json({Message: "Email has already existed"})
    };
    const hashPassport = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const newUser = await User.create({
        lastName,
        phone,
        name,
        email,
        password: hashPassport,
    });

    const payload = {
        id: newUser._id
    };

    const token = jwt.sign(payload, JWT_SECRET)
    await User.findByIdAndUpdate(newUser._id, {token} );

    res.status(201).json({
        lastName,
        name,
        email,
        phone,
        token
    });
};

module.exports = register;