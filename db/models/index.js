const { User, UserModel } = require("./userModels.js");
const { Product, ProductsModel } = require("./productModels.js");
const { Wish, WishModel } = require("./wishModels.js");
const { Cart, CartModel } = require("./cartModels.js");
const { Order, OrdersModel } = require("./orderModels.js");

// These are the Schemas for all the tables
// and if they haven't been created sequealize will do it.
// We are exporting this fuction because
// we will need it in the sequelize conection and configuration.
function setupModels(sequelize) {
  User.init(UserModel, User.config(sequelize));
  Product.init(ProductsModel, Product.config(sequelize));
  Wish.init(WishModel, Wish.config(sequelize));
  Cart.init(CartModel, Cart.config(sequelize));
  Order.init(OrdersModel, Order.config(sequelize));
}

module.exports = { setupModels };
