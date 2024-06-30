import { Router } from "express";
import { createUser, login } from "../controllers/user.controllers.js";
import { userValidations, loginValidations } from "../validators/userValidation.js";
import { validateFields } from "../validators/validateFields.js";

const router = Router()

// Antes de ejecutar el controller podemos ejecutar varias validaciones antes..
router.post("/user", [userValidations.email, userValidations.password], validateFields, createUser)
router.post("/login", [loginValidations.email], validateFields, login)

export default router;
// File a importar en index.js