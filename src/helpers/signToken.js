import jwt from "jsonwebtoken";
import { SECRET, USER_KEY, ADMIN_KEY } from "../config/config.js";

export const signToken = (user) => {
  // Generar un token con los atributos [id y role] de un usuario
  // y lo guarda en la variable "token"
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    SECRET
    // { expiresIn: "1d" } // Tiempo de expiración
  );

  const auth = {
    token: token,
    key: user.role == "admin" ? ADMIN_KEY : USER_KEY,
  };

  return auth;
};
