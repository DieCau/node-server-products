import { Router } from "express";
import { 
    createUser,
} from "../controllers/user.controllers.js";

import { userValidations } from "../validators/userValidation.js";
import { validateFields } from "../validators/validateFields.js";


const router = Router()

// Antes de ejecutar el controller podemos ejecutar varias validaciones antes..
router.post("/user", [userValidations.email, userValidations.password], validateFields, createUser)

export default router;
// File a importar en index.js