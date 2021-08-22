const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    accessHash: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    data: {
      type: String,
    },
  },
  { timestamps: true }
);

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
