import { v4 as uuidv4 } from "uuid";
import boom from "@hapi/boom";

export async function add(model, data) {
  const recordToCreate = await model.create(data);
  return recordToCreate;
}

export async function find(model, id) {
  const recordToFind = await model.findByPk(id);
  if (recordToFind === -1) {
    throw boom.notFound("Not found");
  }
  return recordToFind;
}

export async function update(model, id, body) {
  const recordToUpdate = await model.findByPk(id);
  if (recordToUpdate === -1) {
    throw boom.notFound("Not found");
  }
  const rta = await recordToUpdate.update(body);
  return rta;
}

export async function delet(model, id) {
  const recordToDelete = await model.findByPk(id);
  if (recordToDelete === -1) {
    throw boom.notFound("Not found");
  }
  await recordToDelete.destroy();
  return { message: "deleted", id: id };
}
