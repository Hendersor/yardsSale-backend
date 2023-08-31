import express from "express";
import { CartService } from "../services/cartService.js";
import { createCartSchema, deleteCartSchema } from "../schemas/cartSchema.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";

const router = express.Router();
const service = new CartService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post(
  "/",
  schemaValidator(createCartSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.addProduct(body);
    res.json(newProduct);
  }
);

router.delete(
  "/:id",
  schemaValidator(deleteCartSchema, "params"),
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

export { router };
