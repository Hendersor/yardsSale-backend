import { Model, DataTypes } from "sequelize";

const CART_TABLE = "cart";

const CartModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING(255),
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

export { CART_TABLE, CartModel, Cart };
