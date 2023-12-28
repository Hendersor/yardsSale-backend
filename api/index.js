const Express = require("express");
const { routerApi } = require("./routes/index.js");
const {
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler.js");
const { checkApiKey } = require("./middlewares/authHandler.js");

const app = Express();
const port = process.env.PORT;
app.use(Express.json());

app.get("/api", (req, res) => {
  res.send("Server on");
});

require("./utils/auth/index.js");
routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
