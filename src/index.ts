import express, { Express, Request, Response } from "express"
import path from "path"

const app: Express = express()
const port = process.env.PORT || 3000

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server")
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
