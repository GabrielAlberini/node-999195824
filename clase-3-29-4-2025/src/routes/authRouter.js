// distinguir método y endpoin
// designarle un controlador
import { Router } from "express"

import { register, login } from "../controllers/authController.js"

const authRouter = Router()

// "/api/auth/register"
authRouter.post("/register", register)
authRouter.post("/login", login)

export { authRouter }