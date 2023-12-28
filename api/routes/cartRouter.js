const express = require("express");
const { CartService } = require("../services/cartService.js");
const {
  createCartSchema,
  deleteCartSchema,
} = require("../schemas/cartSchema.js");
const { schemaValidator } = require("../middlewares/schemaValidator.js");

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

module.exports = { router };
