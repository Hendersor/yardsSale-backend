import { User, UserModel } from "./userModels.js";
import { Product, ProductsModel } from "./productModels.js";
import { Wish, WishModel } from "./wishModels.js";
import { Cart, CartModel } from "./cartModels.js";
// These are the Schemas for all the tables
// and if they haven't been created sequealize will do it.
// We are exporting this fuction because
// we will need it in the sequelize conection and configuration.
function setupModels(sequelize) {
  User.init(UserModel, User.config(sequelize));
  Product.init(ProductsModel, Product.config(sequelize));
  Wish.init(WishModel, Wish.config(sequelize));
  Cart.init(CartModel, Cart.config(sequelize));
}

export { setupModels };
