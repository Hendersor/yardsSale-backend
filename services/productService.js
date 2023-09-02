import { add, find, update, delet } from "../helpers/services.js";
import { sequelize } from "../libs/sequelize.js";

class ProductService {
  constructor() {
    this.models = sequelize.models.Product;
  }

  async find() {
    return await this.models.findAll();
  }

  async create(data) {
    return await add(this.models, data);
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
}

export { ProductService };
