const { add, delet, find } = require("../helpers/services.js");
const { sequelize } = require("../libs/sequelize.js");

class ordersService {
  constructor() {
    this.models = sequelize.models.Orders;
  }

  async createOrder(data) {
    return add(this.models, data);
  }

  async addItem(data) {
    const newItem = await sequelize.models.OrderProduct.create(data);
    return newItem;
  }

  async allOrders() {
    return this.models.findAll({
      include: [{ association: "customer" }, "items"],
    });
  }

  async findOrder(id) {
    return find(this.models, id, true);
  }

  async deleteOrders() {
    return delet(this.models);
  }
}

module.exports = { ordersService };
