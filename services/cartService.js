import { add, delet } from "../helpers/services.js";
import { sequelize } from "./../libs/sequelize.js";

class CartService {
  constructor() {
    this.models = sequelize.models.Cart;
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

export { CartService };
