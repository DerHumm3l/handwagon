const request = require("supertest");
const faker = require("faker");
const httpStatus = require("http-status");
const app = require("../../src/app");
const setupTestDB = require("../../src/utils/setupTestDB");
const { Cart } = require("../../src/models");
const { cartOne, insertCarts } = required("../fixtures/cart.fixture");

setupTestDB();
