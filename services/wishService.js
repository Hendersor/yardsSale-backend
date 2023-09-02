import { add, delet } from "../helpers/services.js";
import { sequelize } from "./../libs/sequelize.js";

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

export { wishService };
