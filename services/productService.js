import { data } from "../data.js";
import { add, find, update, delet } from "../helpers/services.js";
import { pool } from "../libs/postgresPool.js";

class ProductService {
  constructor() {
    this.products = data;
    this.pool = pool;
  }

  async find() {
    const query = "SELECT * FROM tasks";
    const rta = await this.pool.query(query);
    return rta;
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
