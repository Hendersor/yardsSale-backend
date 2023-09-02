import { add, find, update, delet } from "../helpers/services.js";
import { sequelize } from "./../libs/sequelize.js";

class userService {
  constructor() {
    this.models = sequelize.models.User;
  }

  async allUsers() {
    return await this.models.findAll();
  }

  async findUser(id) {
    return await find(this.models, id);
  }

  async createUser(data) {
    return await add(this.models, data);
  }

  async updateUser(id, body) {
    return await update(this.models, id, body);
  }

  async deleteUser(id) {
    return await delet(this.models, id);
  }
}

export { userService };
