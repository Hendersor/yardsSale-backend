import { ProductService } from "../services/productService.js";
import express from "express";

const router = express.Router();
const service = new ProductService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

export { router };
