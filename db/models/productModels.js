const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductsModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [1, 1000],
    },
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING(255),
    validate: {
      isUrl: true,
    },
  },
};

class Product extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductsModel, Product };
