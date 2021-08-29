const request = require("supertest");
const faker = require("faker");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const { encrypt, decrypt } = require("../../src/utils/cipher");
const app = require("../../src/app");
const setupTestDB = require("../../src/utils/setupTestDB");
const { Cart } = require("../../src/models");
const { cartOne, insertCarts } = required("../fixtures/cart.fixture");

setupTestDB();

describe("Cart routes", () => {
  describe("POST /v1/carts", () => {
    let newCart;

    beforeEach(() => {
      const hash = bcrypt.hashSync("sixteenletters!", 5);
      const data = {
        title: "New List",
        items: ["Peanut butter", "Milk", "Flour", "Bananas", "Potatoes"],
      };
      const hex = encrypt("sixteenletters!", JSON.stringify(data));

      newCart = {
        accessKey: hash,
        data: hex,
      };
    });

    test("should return 201 and successfully create new cart, if data is ok", async () => {
      const res = await request(app)
        .post("/v1/carts")
        .send(newCart)
        .expect(httpStatus.CREATED);

      expect(res.body).toEqual({
        _id: expect.anything(),
      });
    });
  });
});
