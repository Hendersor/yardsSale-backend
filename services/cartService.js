import { add, delet } from "../helpers/services.js";

class CartService {
  constructor() {
    this.products = [];
  }

  async find() {
    return this.products;
  }

  async addProduct(data) {
    return add(this.products, data);
  }

  async deleteProduct(id) {
    return delet(this.products, id);
  }
}

export { CartService };
