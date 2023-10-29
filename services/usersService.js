const { add, find, update, delet } = require("../helpers/services.js");
const { sequelize } = require("./../libs/sequelize.js");

class userService {
  constructor() {
    this.models = sequelize.models.User;
  }

  async allUsers() {
    return await this.models.findAll({ include: ["customer"] });
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

module.exports = { userService };
