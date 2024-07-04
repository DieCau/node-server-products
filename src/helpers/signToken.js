import Jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const signToken = (user) => {
  // Generar un token con los atributos [id y role] de un usuario
  // y lo guarda en la variable "token"
  const token = Jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    SECRET,
    // { expiresIn: "1d" } // Tiempo de expiración
  );

  return token;
};
