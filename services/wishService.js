const { add, delet } = require("../helpers/services.js");
const { sequelize } = require("./../libs/sequelize.js");

class wishService {
  constructor() {
    this.models = sequelize.models.Wish;
  }

  async find() {
    return await this.models.findAll();
  }

  async addProduct(data) {
    return await add(this.models, data);
  }

  async deleteProduct(id) {
    return await delet(this.models, id);
  }
}

module.exports = { wishService };
