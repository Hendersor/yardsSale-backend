const express = require("express");
const { ordersService } = require("../services/ordersService.js");
const { schemaValidator } = require("../middlewares/schemaValidator.js");
const {
  createOrderSchema,
  findOrderSchema,
  addItemSchema,
} = require("../schemas/ordersSchemas.js");

const router = express.Router();
const service = new ordersService();

router.get("/", async (req, res, next) => {
  try {
    const orders = await service.allOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  schemaValidator(findOrderSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOrder(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  schemaValidator(createOrderSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const order = await service.createOrder(body);
    res.json(order);
  }
);

router.delete("/", async (req, res, next) => {
  try {
    const rta = await service.deleteOrders();
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/add-item",
  schemaValidator(addItemSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { router };
