const mongoose = require("mongoose");

const schema = {
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
};

module.exports = mongoose.model("CartSchema", schema.CartSchema);
