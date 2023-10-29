const boom = require("@hapi/boom");

async function add(model, data) {
  const recordToCreate = await model.create(data);
  return recordToCreate;
}

async function find(model, id, include) {
  const options =
    include === undefined
      ? {}
      : {
          include: [{ association: "customer", include: ["user"] }, "items"],
        };
  const recordToFind = await model.findByPk(id, options);

  if (!recordToFind) {
    throw boom.notFound("Not found");
  }
  return recordToFind;
}

async function update(model, id, body) {
  const recordToUpdate = await model.findByPk(id);
  if (recordToUpdate === -1) {
    throw boom.notFound("Not found");
  }
  const rta = await recordToUpdate.update(body);
  return rta;
}

async function delet(model, id) {
  if (id) {
    const recordToDelete = await model.findByPk(id);
    console.log(model, id);

    if (!recordToDelete) {
      throw boom.notFound("Not found");
    }
    await recordToDelete.destroy();
    return { message: "deleted", id: id };
  } else {
    await model.update({ products: null }, { where: {} });
    return { message: "ALL orders deleted" };
  }
}

module.exports = { add, find, update, delet };
