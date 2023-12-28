const { Model, DataTypes, Sequelize } = require("sequelize");

const CART_TABLE = "cart";

const CartModel = {
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
      isAlphanumeric: true,
      notEmpty: true,
      len: [1, 255],
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

class Cart extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_TABLE,
      modelName: "Cart",
      timestamps: false,
    };
  }
}

module.exports = { CART_TABLE, CartModel, Cart };
