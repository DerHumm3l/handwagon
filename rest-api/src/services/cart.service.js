const { Cart } = require("../models");

/**
 * Create a cart
 * @param {Object} cartBody
 * @returns {Promise<Cart>}
 */
const createCart = async (cartBody) => {
  return Cart.create(cartBody);
};

module.exports = {
  createCart,
};
