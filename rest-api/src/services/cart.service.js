const { Cart } = require("../models");
const { encrypt } = require("../utils/cipher");
const bcrypt = require("bcrypt");

/**
 * Create a cart
 * @param {Object} cartBody
 * @returns {Promise<Cart>}
 */
const createCart = async (cartBody) => {
  return Cart.create(cartBody);
};

/**
 * Build new object with encrypted data and hash
 * @param {Object} cartBody
 * @returns {Promise<Object>}
 */
const buildCartData = async (cartBody) => {
  const gen = "sixteenletters!!";

  return {
    ...cartBody,
    accessKey: gen,
    hash: await bcrypt.hash(gen, 5),
    hex: encrypt(gen, cartBody.data),
  };
};

module.exports = {
  createCart,
  buildCartData,
};
