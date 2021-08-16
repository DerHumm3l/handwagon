const mongoose = require("mongoose");

const userSchema = mongoose.Schema({});

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", userSchema);

module.exports = Cart;
