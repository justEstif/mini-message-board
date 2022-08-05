import express from "express"

const router = express.Router()

router.get("/", (_, res, ___) => {
  res.render("form")
})


router.post("/", (_, res, ___) => {
  res.render("form")
})
export default router
