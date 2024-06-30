// Desde donde viene nuestro objeto con información
import { body } from "express-validator";
import User from "../models/user.model.js";
import { passwordRegex } from "../helpers/passwordRegex.js";

// Funcion que busca un email ya registrado
const existEmail = async (email) => {
  const userFound = await User.findOne({ email: email });

  if (userFound) {
    throw new Error(`El email ${email} ya se encuentra registrado`);
  }
  return false;
};

// Funcion que busca error en email ya registrado
const existEmailLogin = async (email) => {
  const userFound = await User.findOne({ email: email });

  if (!userFound) {
    throw new Error(`El email o contraseña son incorrectos`);
  }
  return true;
};



// Validaciones para el Usuario
export const userValidations = {
  email: body("email") // Desde el body toma valor "email"
    .isEmail() //  Pregunta: es un email?
    .withMessage("Ingrese un email válido") // Si es NO envía el mensaje "Ingrese.."
    .not() // Negar la instruccion que sigue
    .isEmpty() // (NO) Esta vacio?
    .withMessage("Ingrese un email") // Mensaje ('Ingrese...)
    .custom(existEmail), // Funcion que se ejecuta al final

  password: body("password") // Tomar desde el body el valor "password"
    .matches(passwordRegex) // funcion que compara con la exp reg
    .withMessage("Ingrese un password válido"), // Mensaje si NO paso la validacion anterior
};

// Validaciones para el Login
export const loginValidations = {
  email: body("email") // Desde el body toma valor "email"
    .isEmail() // Pregunta: es un email?
    .withMessage("Ingrese un email válido") // Si es NO envía el mensaje "Ingrese.."
    .not() // Negar la instruccion que sigue
    .isEmpty() // (NO) Esta vacio?
    .withMessage("Ingrese un email") // Mensaje ('Ingrese...)
    .custom(existEmailLogin) // Funcion que se ejecuta al final

};

// File que se importa en user.Routes.js
