import { ProductService } from "../services/productService.js";
import express from "express";

const router = express.Router();
const service = new ProductService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    throw error(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.json(newProduct);
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    throw error(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

export { router };
