const Joi = require("joi");

const id = Joi.string();
const title = Joi.string().alphanum();
const category = Joi.string().alphanum();
const description = Joi.string().alphanum();
const price = Joi.number().integer();
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
