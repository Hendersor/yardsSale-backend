const express = require("express");
const { router: productsRouter } = require("./productsRouter.js");
const { router: cartRouter } = require("./cartRouter.js");
const { router: wishRouter } = require("./wishListRouter.js");
const { router: usersRouter } = require("./usersRouter.js");
const { router: ordersRouter } = require("./ordersRouter.js");
const { router: customersRouter } = require("./customerRouter.js");
const { router: authRouter } = require("./authRouter.js");
const { router: profileRouter } = require("./profileRouter.js");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/cart", cartRouter);
  router.use("/wish", wishRouter);
  router.use("/users", usersRouter);
  router.use("/orders", ordersRouter);
  router.use("/customers", customersRouter);
  router.use("/auth", authRouter);
  router.use("/profile", profileRouter);
}

module.exports = { routerApi };
