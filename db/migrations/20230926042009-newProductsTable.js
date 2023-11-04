"use strict";

const { ProductsModel, PRODUCT_TABLE } = require("../models/productModels.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductsModel);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
