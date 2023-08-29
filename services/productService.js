import { v4 as uuidv4 } from "uuid";
import { data } from "../data.js";

class ProductService {
  constructor() {
    this.products = data;
  }

  async find() {
    return this.products;
  }

  async create(data) {
    const newProduct = {
      id: uuidv4(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      return {
        message: "Product not found",
      };
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return { message: "product not found" };
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) return { message: "product not found" };
    this.products.splice(index, 1);
    return { message: "deleted", id: id };
  }
}

export { ProductService };
