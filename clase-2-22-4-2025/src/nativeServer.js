// argumentos pasados por terminal
// variables de entorno

// const PORT = process.argv[2]
// console.log(PORT, "<- Puerto pasado por la terminal")
import http from "node:http"
import { users } from "./data/users.js"

process.loadEnvFile()

const PORT = process.env.PORT
console.log(PORT, "<- Puerto pasado por una variable de entorno")

const server = http.createServer((request, response) => {
  const { url, method } = request

  response.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });

  if (url === "/" && method === "GET") {
    return response.end(JSON.stringify(users))
  }

  if (url === "/hola") {
    response.end(JSON.stringify({ data: 1 }))
  }
})

// un medio de comunicación del frontend hacia el backend (api)
// funciona con el protocolo HTTP
// https://www.google.com/search?q=receta+de+canelones - método GET (dame los datos)
// para las acciónes recibe métodos http

server.listen(PORT, () => {
  console.log("Conexión éxitosa en http://localhost:" + PORT)
})
