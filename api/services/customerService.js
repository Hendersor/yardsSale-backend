const { add, find, update, delet } = require("../helpers/services.js");
const { sequelize } = require("./../libs/sequelize.js");
const bcrypt = require("bcrypt");

class CustomerService {
  constructor() {
    this.models = sequelize.models.Customer;
  }

  async find() {
    return await this.models.findAll({ include: ["user", "orders"] });
  }

  async findOne(id) {
    return await find(this.models, id);
  }

  async update(id, changes) {
    return await update(this.models, id, changes);
  }

  async delete(id) {
    return await delet(this.models, id);
  }

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const rta = await add(this.models, newData);
    return rta;
  }
}

module.exports = { CustomerService };
