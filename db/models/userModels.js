import { Model, DataTypes, Sequelize } from "sequelize";

const USER_TABLE = "users";

const UserModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  username: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

export { USER_TABLE, UserModel, User };
