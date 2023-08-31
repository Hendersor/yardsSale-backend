import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().alphanum();
const userName = Joi.string().alphanum();

const createUserSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  username: userName.required(),
});

const findUserSchema = Joi.object({
  id: id.required(),
});

const editUserSchema = Joi.object({
  id: id,
  name: name,
  username: userName,
});

export { createUserSchema, findUserSchema, editUserSchema };
