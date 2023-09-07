const Joi = require("joi");

const id = Joi.string();
const name = Joi.string().alphanum();
const category = Joi.string().alphanum();
const description = Joi.string().alphanum();
const price = Joi.number().integer();
const image = Joi.string().uri();

const createCartSchema = Joi.object({
  title: name.required(),
  category: category.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
});

const deleteCartSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCartSchema, deleteCartSchema };
