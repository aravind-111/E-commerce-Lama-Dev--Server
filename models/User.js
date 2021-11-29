const mongoose = require("mongoose");

const schema = {
  // user schema
  UserSchema: new mongoose.Schema(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true, unique: true },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  ),
};

module.exports = mongoose.model("UserSchema", schema.UserSchema);
