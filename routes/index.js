import express from "express";
import { router } from "./productsRouter.js";
const productsRouter = router;

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
}

export { routerApi };
