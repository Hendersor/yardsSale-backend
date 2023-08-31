import Express from "express";
import { routerApi } from "./routes/index.js";
import { errorHandler, boomErrorHandler } from "./middlewares/errorHandler.js";
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
