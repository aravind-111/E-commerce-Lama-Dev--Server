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

  //   product schema
  ProductSchema: new mongoose.Schema(
    {
      title: { type: String, required: true, unique: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      categories: { type: Array },
      size: { type: String },
      color: { type: String },
      price: { type: Number, required: true },
    },
    { timestamps: true }
  ),

  //   cart schema
  CartSchema: new mongoose.Schema(
    {
      userId: { type: String, required: true },
      products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
    { timestamps: true }
  ),

  //   order schema
  OrderSchema: new mongoose.Schema(
    {
      userId: { type: String, required: true },
      products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      amount: { type: Number, required: true },
      address: { type: Object, required: true },
      status: { type: String, default: "pending" },
    },
    { timestamps: true }
  ),
};

module.exports = mongoose.model("UserSchema", schema.UserSchema);
module.exports = mongoose.model("ProductSchema", schema.ProductSchema);
module.exports = mongoose.model("CartSchema", schema.CartSchema);
module.exports = mongoose.model("OrderSchema", schema.OrderSchema);
