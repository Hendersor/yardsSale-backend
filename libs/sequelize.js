import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import { setupModels } from "../db/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// This part represents a succesfull conection to the BD
const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});

sequelize
  .authenticate()
  // This is the model function. And it's going to execute
  // right before the conection to create the models of the tables only if they are not already created.
  .then(() => {
    setupModels(sequelize);
    sequelize.sync();
  })
  .catch((err) => {
    console.error("Conection failed");
  });

export { sequelize };
