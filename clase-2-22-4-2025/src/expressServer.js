import express from "express"
import cors from "cors"
import { users } from "./data/users.js"

const server = express()
server.use(cors())

server.get("/users", (req, res) => {
  res.json(users)
})

// obtener un usuario en particular
server.get("/users/:id", (req, res) => {
  const id = req.params.id

  const foundUser = users.find(user => user.id === Number(id))
  if (!foundUser) res.json({ error: "User not found" })
  res.json(foundUser)
})

server.listen(1234, () => {
  console.log("Servidor en funcionamiento http://localhost:1234")
})