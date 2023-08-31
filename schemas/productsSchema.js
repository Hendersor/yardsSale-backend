import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().alphanum();
const category = Joi.string().alphanum();
const description = Joi.string().alphanum();
const price = Joi.number().integer();
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  category: category.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  category: category,
  description: description,
  price: price,
  image: image.r,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getProductSchema };
