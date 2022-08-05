import express from "express"
import path from "path"

import index from "./routes/index"

const app: express.Express = express()
const port = process.env.PORT || 3000

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use("/", index)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
