const { Model, DataTypes, Sequelize } = require("sequelize");

const WISH_TABLE = "wish";

const WishModel = {
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
