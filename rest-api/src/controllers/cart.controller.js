const httpStatus = require("http-status");
const { cartService } = require("../services");

const createCart = async (req, res) => {
  const obj = await cartService.buildCartData(req.body);
  const cart = await cartService.createCart(obj);
  res.status(httpStatus.CREATED).send(cart);
};

module.exports = {
  createCart,
};
