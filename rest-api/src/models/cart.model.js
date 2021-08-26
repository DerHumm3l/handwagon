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

/**
 * Check if id matches the access key
 * @param {string} id
 * @returns {Promise<boolean>}
 */
cartSchema.methods.isAccessKeyMatch = async function (id) {
  const cart = this;
  return bcrypt.compare(id, cart.accessKey);
};

cartSchema.pre("save", async function (next) {
  const cart = this;
  if (cart.isModified()) {
    cart.accessKey = await bcrypt.hash(cart.accessKey, 8);
  }
  next();
});

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
