const { Model, DataTypes } = require("sequelize");

const WISH_TABLE = "wish";

const WishModel = {
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

class Wish extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: WISH_TABLE,
      modelName: "Wish",
      timestamps: false,
    };
  }
}

module.exports = { WISH_TABLE, WishModel, Wish };
