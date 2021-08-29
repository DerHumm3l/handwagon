const express = require("express");
const cartRoute = require("./cart.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/carts",
    route: cartRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
