const Joi = require("joi");

const id = Joi.string().guid({ version: "uuidv4" });
const date = Joi.date();
const products = Joi.array();

const orderId = Joi.string().guid({ version: "uuidv4" });
const productId = Joi.string().guid({ version: "uuidv4" });

const createOrderSchema = Joi.object({
  id: id.required(),
  date: date.required(),
  products: products.required(),
  customerId: id.required(),
});

const findOrderSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
});

module.exports = { createOrderSchema, findOrderSchema, addItemSchema };
