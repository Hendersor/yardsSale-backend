const { add, find, update, delet } = require("../helpers/services.js");
const { sequelize } = require("./../libs/sequelize.js");
const bcrypt = require("bcrypt");

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
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await add(this.models, { ...data, password: hash });
    delete newUser.dataValues.password;
    return newUser;
  }

  async updateUser(id, body) {
    return await update(this.models, id, body);
  }

  async deleteUser(id) {
    return await delet(this.models, id);
  }
}

module.exports = { userService };
