import express from "express";
import { wishService } from "../services/wishService.js";
import { validatorHandler } from "../middlewares/errorHandler.js";
import {
  createProductSchema,
  getProductSchema,
} from "../schemas/productsSchema.js";
const router = express.Router();
const service = new wishService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.deleteProduct(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const product = await service.addProduct(body);
    res.json(product);
  }
);

export { router };
