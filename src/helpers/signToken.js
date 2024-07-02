import Jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const signToken = (user) => {
    // Generar un token con los atributos de un usuario
    // y lo guarda en la variable "token"
  const token = Jwt.sign({
    id: user._id,
    role: user.role,
  }, SECRET)
   
  return token;
};
