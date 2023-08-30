import express from "express";
import { router as productsRouter } from "./productsRouter.js";
import { router as cartRouter } from "./cartRouter.js";

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/cart", cartRouter);
}

export { routerApi };
