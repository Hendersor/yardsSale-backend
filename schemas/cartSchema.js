const Joi = require("joi");

const id = Joi.string();
const title = Joi.string().alphanum().trim().min(1).max(255);
const price = Joi.number().precision(2);
const image = Joi.string().uri();

const createCartSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  image: image.required(),
});

const deleteCartSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCartSchema, deleteCartSchema };
