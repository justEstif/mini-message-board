import express from "express"
import { messages } from "./index"

const router = express.Router()

router.get("/", (_, res, ___) => {
  res.render("form")
})

router.post("/", (req, res, ___) => {
  try {
    messages.push({
      message: req.body.message,
      user: req.body.author,
      sent: new Date(),
    })
    res.redirect("/")
  } catch (err) {
    console.log(err)
  }
})

export default router
