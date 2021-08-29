const express = require("express");
const cartController = require("../../controllers/cart.controller");

const router = express.Router();

router.route("/").post(cartController.createCart);

module.exports = router;
