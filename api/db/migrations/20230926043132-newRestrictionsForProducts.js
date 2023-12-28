"use strict";

const { Sequelize } = require("sequelize");
const { PRODUCT_TABLE } = require("../models/productModels.js");
const { CART_TABLE } = require("../models/cartModels.js");
const { WISH_TABLE } = require("../models/wishModels.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, "category", {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [1, 255],
      },
    });

    await queryInterface.changeColumn(PRODUCT_TABLE, "title", {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [1, 255],
      },
    });

    await queryInterface.changeColumn(PRODUCT_TABLE, "description", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [1, 1000],
      },
    });

    await queryInterface.changeColumn(PRODUCT_TABLE, "image", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING(255),
      validate: {
        isUrl: true,
      },
    });

    await queryInterface.changeColumn(CART_TABLE, "title", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [1, 255],
      },
    });

    await queryInterface.changeColumn(CART_TABLE, "price", {
      allowNull: false,
      type: Sequelize.DataTypes.DECIMAL(10, 2),
    });

    await queryInterface.changeColumn(CART_TABLE, "image", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING(255),
      validate: {
        isUrl: true,
      },
    });

    await queryInterface.changeColumn(WISH_TABLE, "title", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [1, 255],
      },
    });

    await queryInterface.changeColumn(WISH_TABLE, "price", {
      allowNull: false,
      type: Sequelize.DataTypes.DECIMAL(10, 2),
    });

    await queryInterface.changeColumn(WISH_TABLE, "image", {
      allowNull: false,
      type: Sequelize.DataTypes.STRING(255),
      validate: {
        isUrl: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
