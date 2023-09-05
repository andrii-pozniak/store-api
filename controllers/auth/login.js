const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../schema/UserModel");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
        message: "Incorrect email",
      });
  };

  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (!passwordCompare) {
    return res.status(401).json({
        message: "Incorrect password",
      });
  };

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET);
await User.findByIdAndUpdate(user._id, {token});
return res.status(201).json({
    token,
})

};

module.exports = login;
