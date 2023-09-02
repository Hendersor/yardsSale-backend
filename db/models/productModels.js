import { Model, DataTypes, Sequelize } from "sequelize";

const PRODUCT_TABLE = "products";

const ProductsModel = {
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
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
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

export { PRODUCT_TABLE, ProductsModel, Product };
