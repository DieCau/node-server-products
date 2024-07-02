import { body } from "express-validator";
import { imageRegex } from "../helpers/imageURLRegex.js";
import Product from "../models/product.model.js";


const existProduct =async(name) => {
  const productFound = await Product.findOne({ name: name });

  if (productFound) {
    throw new Error(`El producto ${name} ya se encuentra registrado`);
  }
  return false;
}

// export const productValidations = {
//   email: body("email") // Desde el body toma valor "email"
//     .isEmail() //  Pregunta: es un email?
//     .withMessage("Ingrese un email válido") // Si es NO envía el mensaje "Ingrese.."
//     .not() // Negar la instruccion que sigue
//     .isEmpty() // (NO) Esta vacio?
//     .withMessage("Ingrese un email") // Mensaje ('Ingrese...)
//     .custom(existEmail), // Funcion que se ejecuta al final
// }