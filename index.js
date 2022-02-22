import express from "express"
import cors from "cors"

import indexRouter from "./src/routes/index.routes.js"
import authRouter from "./src/routes/auth.routes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use([authRouter, indexRouter])

app.listen(5000, () => {
  console.log('Servidor On 👽')
})