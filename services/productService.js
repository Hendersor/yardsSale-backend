import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: uuidv4(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        category: faker.commerce.department(),
        Image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
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
