const express = require("express");
const { ProductService } = require("../services/productService.js");
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require("../schemas/productsSchema.js");
const { schemaValidator } = require("../middlewares/schemaValidator.js");

const router = express.Router();
const service = new ProductService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  "/:id",
  schemaValidator(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  schemaValidator(createProductSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.json(newProduct);
  }
);

router.patch(
  "/:id",
  schemaValidator(getProductSchema, "params"),
  schemaValidator(updateProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  schemaValidator(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { router };
