import express from "express"
interface IMessage {
  message: string
  user: string
  sent: Date
}

const router = express.Router()

const messages: IMessage[] = [
  {
    message: "Hi there!",
    user: "Amando",
    sent: new Date(),
  },
  {
    message: "Hello World!",
    user: "Charles",
    sent: new Date(),
  },
]

// (req, res, next)
router.get("/", (_, res, __) => {
  res.render("index", { title: "Mini Message Board", messages: messages })
})

export { messages }
export default router
