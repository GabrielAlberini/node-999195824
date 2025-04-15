// commonjs
// const crypto = require("crypto")
// es modules
import crypto from "node:crypto"
import os from "node:os"
import http from "node:http"
import { users } from "./users.js"

// dotenv -> deja leer variables de entorno desde .env
console.log("Hola!")
console.log("Chau!")

// disponible desde la versión 22
process.loadEnvFile()

// crear para un usuario un id único
// uuid() 
console.log(crypto.randomUUID())

console.log("Sistema operativo:", os.platform())
console.log("Memoria libre:", os.freemem())

const PORT = process.env.PORT

const server = http.createServer((request, response) => {
  const { url, method } = request

  if (url === "/users" && method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify(users))
  }
})

server.listen(PORT, () => {
  console.log("Servidor HTTP en ejecución...")
})