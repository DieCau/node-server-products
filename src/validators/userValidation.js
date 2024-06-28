// Desde donde viene nuestro objeto con información
import { body } from "express-validator";
import User from "../models/user.model.js";
import { passwordRegex } from "../helpers/passwordRegex.js"

export const userValidations =  {
    email: body("email")                       // Desde el body toma valor "email"
    .isEmail()                                 //  Pregunta: es un email?
    .withMessage("Ingrese un email válido")    // Si es NO envía el mensaje "Ingrese.."
    .not()                                     // Negar la instruccion que sigue 
    .isEmpty()                                 // (NO) Esta vacio?
    .withMessage("Ingrese un email"),          // Mensaje ('Ingrese...)

    password: body("password")                 // Tomar desde el body el valor "password"
    .matches(passwordRegex)                    // funcion que compara con la exp reg 
    .withMessage("Ingrese un password válido") // Mensaje si NO paso la validacion anterior    
}

// File que se importa en user.Routes.js