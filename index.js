import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import indexRouter from "./src/routes/index.routes.js"
import authRouter from "./src/routes/auth.routes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use([authRouter, indexRouter])

app.listen(process.env.PORT, () => {
  console.log('Servidor On 👽')
})