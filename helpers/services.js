import { v4 as uuidv4 } from "uuid";
import boom from "@hapi/boom";

export function add(dataArray, data) {
  const newAddition = {
    id: uuidv4(),
    ...data,
  };
  dataArray.push(newAddition);
  return newAddition;
}

export function find(dataArray, id) {
  const product = dataArray.find((user) => user.id === id);
  if (product === -1) {
    throw boom.notFound("Not found");
  }
  return product;
}

export function update(dataArray, id, body) {
  const index = dataArray.findIndex((user) => user.id === id);
  if (index === -1) {
    throw boom.notFound("Not found");
  }
  const user = dataArray[index];
  dataArray[index] = { ...user, ...body };
  return dataArray[index];
}

export function delet(dataArray, id) {
  const index = dataArray.findIndex((user) => user.id === id);
  if (index === -1) {
    throw boom.notFound("Not found");
  }
  dataArray.splice(index, 1);
  return { message: "Deleted", id: id };
}
