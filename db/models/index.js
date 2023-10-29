const { User, UserModel } = require("./userModels.js");
const { Product, ProductsModel } = require("./productModels.js");
const { Wish, WishModel } = require("./wishModels.js");
const { Cart, CartModel } = require("./cartModels.js");
const { Order, OrdersModel } = require("./orderModels.js");
const { Customer, CustomerModel } = require("./customerModel.js");
const { OrderProduct, OrderProductSchema } = require("./orderProductModel.js");

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
  Customer.init(CustomerModel, Customer.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Order.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = { setupModels };
