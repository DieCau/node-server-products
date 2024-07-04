import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const validateToken = (req, res, next) => {
// Envio el key "auth-token" en Headers de la peticion 
  const token = req.header("auth-token");

  // Si NO recibe un token valido envia mensaje de error(401)
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado" });
  }


  try {
    // Jwt.verify recibe el Token como tal y la firma
    const verified = jwt.verify(token, SECRET);
    // Asignar todo el objeto "verified" a req.userToken 
    req.userToken = verified;
    // Continua en el controller en la proxima funcion, o salir 
    next();
  
  } catch (error) {
    return res.status(400).json({ error: "Token invalido" });
  }
};
