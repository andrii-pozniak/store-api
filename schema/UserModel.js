const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for user"],
  },
  email: {
    type: String,
    required: [true, "Set email address for user"],
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  token: {
    type: String,
  },
});

const User = model("user", UserSchema);

module.exports = { User };