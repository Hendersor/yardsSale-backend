import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { data } from "../data.js";

class ProductService {
  constructor() {
    this.products = data;
  }

  async create(data) {
    const newProduct = {
      id: uuidv4(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }
}

export { ProductService };
