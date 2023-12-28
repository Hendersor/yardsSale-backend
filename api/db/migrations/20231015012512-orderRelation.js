"use strict";

const { ORDER_TABLE } = require("../models/orderModels");
const { CUSTOMER_TABLE } = require("../models/customerModel");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(ORDER_TABLE, "customer_id", {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
      references: {
        model: CUSTOMER_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down() {},
};
