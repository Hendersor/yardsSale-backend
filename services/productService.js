import { data } from "../data.js";
import { add, find, update, delet } from "../helpers/services.js";

class ProductService {
  constructor() {
    this.products = data;
  }

  async find() {
    return this.products;
  }

  async create(data) {
    return add(this.products, data);
  }

  async findOne(id) {
    return find(this.products, id);
  }

  async update(id, changes) {
    return update(this.products, id, changes);
  }

  async delete(id) {
    return delet(this.products, id);
  }
}

export { ProductService };
