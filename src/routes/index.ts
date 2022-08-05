import express from "express"
interface IMessages {
  text: string
  user: string
  added: Date
}

const router = express.Router()

const messages: IMessages[] = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

// (req, res, next)
router.get("/", (_, res, __) => {
  res.render("index", { title: "Mini Message Board", messages: messages })
})

export default router
