import Express from "express";
import { routerApi } from "./routes/index.js";

const app = Express();
const port = 3000;
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Server on");
});
routerApi(app);
app.listen(port, () => {});
