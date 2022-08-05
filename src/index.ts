import express from "express";
import path from "path";

import { config } from "./config";
import index from "./routes/index";
import form from "./routes/form";

const app: express.Express = express();
const port = config.server.port;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", index);
app.use("/new", form);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
