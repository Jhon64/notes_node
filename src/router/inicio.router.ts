import express, { Request, Response } from "express"
const router = express.Router()

console.log(router)
router.get("/", (req: Request, res: Response) => {
    res.send("init")
})

export default router