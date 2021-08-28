const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Cart = require("../../src/models/cart.model");
const { encrypt } = require("./../../src/utils/cipher");

const id = "sixteenletters!"; // nano id
const hash = bcrypt.hashSync(id, 5);

const data = {
  title: "My List",
  items: ["Salad", "Tomatoes", "Cucumber", "Pumpkin", "Toast", "Rice", "Tea"],
};
const hex = encrypt(id, JSON.stringify(data));

const cartOne = {
  _id: mongoose.Types.ObjectId(),
  accessKey: id,
  data,
};

const insertCarts = async (carts) => {
  await Cart.insertMany(
    carts.map((cart) => ({
      ...cart,
      accessKey: hash,
      data: hex,
    }))
  );
};

module.exports = {
  cartOne,
  insertCarts,
};
