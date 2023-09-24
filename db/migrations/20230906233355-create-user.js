'use strict';

const {UserModel, USER_TABLE} = require('./../models/userModels.js')
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserModel)
  },

  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE)
  }
};
