const Joi = require("joi");

const id = Joi.string().guid({ version: "uuidv4" });
const title = Joi.string().trim().min(1).max(255);
const category = Joi.string().trim().min(1).max(255);
const description = Joi.string().trim().min(1).max(1000);
const price = Joi.number();
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  title: title.required(),
  category: category.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  category: category,
  description: description,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
