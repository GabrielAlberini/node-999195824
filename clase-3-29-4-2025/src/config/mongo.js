import { connect } from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB

const connectDb = async () => {
  try {
    await connect(URI_DB)
    console.log("Conectado a Mongodb con éxito")
  } catch (error) {
    console.log("Error al conectarse a Mongodb")
  }
}

export { connectDb }