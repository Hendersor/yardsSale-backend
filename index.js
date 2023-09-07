const Express = require("express");
const { routerApi } = require("./routes/index.js");
const {
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler.js");
const app = Express();
const port = 3000;
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Server on");
});
routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
