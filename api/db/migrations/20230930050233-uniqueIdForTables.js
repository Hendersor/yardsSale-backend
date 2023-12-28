"use strict";
const { Sequelize } = require("sequelize");
const { PRODUCT_TABLE } = require("../models/productModels.js");
const { CART_TABLE } = require("../models/cartModels.js");
const { WISH_TABLE } = require("../models/wishModels.js");
const { ORDER_TABLE } = require("../models/orderModels.js");
const { USER_TABLE } = require("../models/userModels.js");

const configureIdColumn = async (queryInterface, table) => {
  await queryInterface.changeColumn(table, "id", {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
  });
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await configureIdColumn(queryInterface, PRODUCT_TABLE);
    await configureIdColumn(queryInterface, CART_TABLE);
    await configureIdColumn(queryInterface, WISH_TABLE);
    await configureIdColumn(queryInterface, ORDER_TABLE);
    await configureIdColumn(queryInterface, USER_TABLE);
  },
};
