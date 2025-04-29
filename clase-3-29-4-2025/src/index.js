// recibir el input y delegarlo al router encargado
import express from "express"
import { connectDb } from "./config/mongo.js";
import { authRouter } from "./routes/authRouter.js";
import jwt from "jsonwebtoken";
process.loadEnvFile()

const PORT = process.env.PORT

const app = express()

// habilita el parseo de json dentro del sistema, por defecto es undefined
app.use(express.json())

// input -> /products /auth /sales /providers
// http://localhost:1234/api/auth
app.use("/api/auth", authRouter)

// app.use("/api/products", productsRouter)
// app.use("/api/sales", salesRouter)
// app.use("/api/providers", providersRouter)

// middleware -> función que se ejecuta entre medio de una request
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: "token requerido" })

  const token = authHeader.split(" ")[1]

  try {
    const JWT_SECRET = process.env.JWT_SECRET
    console.log(JWT_SECRET)

    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId
    console.log(req.userId)
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

app.get("/api/profile", authMiddleware, (req, res) => {
  // ver el perfil del usuario logueado
  res.json({ loggedUser: req.userId })
})

app.listen(PORT, () => {
  connectDb()
  console.log(`Servidor en funcionamiento http://localhost:${PORT}`)
})
