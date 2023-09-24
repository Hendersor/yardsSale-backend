'use strict';

const {UserModel, USER_TABLE} = require('./../models/userModels.js')

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserModel.role)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role')
  } 
};
