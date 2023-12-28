const express = require("express");
const passport = require("passport");

const router = express.Router();
const { ordersService } = require("../services/ordersService.js");
const service = new ordersService();
router.get(
  "/my-orders",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const orders = await service.findByUser(user.sub);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { router };
