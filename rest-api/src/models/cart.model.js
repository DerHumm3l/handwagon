const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cartSchema = mongoose.Schema(
  {
    accessKey: {
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

cartSchema.query.byAccessKey = async function (id) {
  return this.where("accessKey", bcrypt.hashSync(id, 5));
};

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
