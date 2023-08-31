import { add, find, update, delet } from "../helpers/services.js";

class userService {
  constructor() {
    this.users = [];
  }

  async allUsers() {
    return this.users;
  }

  async findUser(id) {
    return find(this.users, id);
  }

  async createUser(data) {
    return add(this.user, data);
  }

  async updateUser(id, body) {
    return update(this.user, id, body);
  }

  async deleteUser(id) {
    return delet(this.users, id);
  }
}

export { userService };
