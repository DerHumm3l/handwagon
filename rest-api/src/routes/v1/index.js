const express = require("express");
const listRoute = require("./list.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/list",
    route: listRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
