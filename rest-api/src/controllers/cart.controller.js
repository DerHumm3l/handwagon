const httpStatus = require("http-status");
const { cartService } = require("../services");

const createCart = async (req, res) => {
  const cart = await cartService.createCart(req.body);
  res.status(httpStatus.CREATED).send(cart);
};

module.exports = {
  createCart,
};
