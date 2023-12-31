const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { userService } = require("./../../../services/usersService");

const service = new userService();
const LocalStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      done(boom.unauthorized(), false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
