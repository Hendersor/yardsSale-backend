"use strict";

import { UserModel, USER_TABLE } from "../models/userModels";
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserModel);
  },

  async down(queryInterface) {
    await queryInterface.drop(USER_TABLE);
  },
};
