const express = require("express");
const { router: productsRouter } = require("./productsRouter.js");
const { router: cartRouter } = require("./cartRouter.js");
const { router: wishRouter } = require("./wishListRouter.js");
const { router: usersRouter } = require("./usersRouter.js");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/cart", cartRouter);
  router.use("/wish", wishRouter);
  router.use("/users", usersRouter);
}

module.exports = { routerApi };
