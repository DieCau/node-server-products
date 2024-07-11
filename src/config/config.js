import dotenv from "dotenv";

dotenv.config();

// Aqui definimos el PORT que nos pase un HOST PAGO o bien declaramos el 4000 para desarollo local
export const PORT = process.env.PORT || 4000;

// Definir la variable de conexion a la BD. 
// Dicha variable se encuentra en file ".env".
export const CONNECTION_STRING = process.env.CONNECTION_STRING

// Palabra que utilizamos para firmar un Token. Esta en el file ".env"
export const SECRET = process.env.SECRET

// Renderizado condicional para el NAV ya sea "admin" o "user"
export const USER_KEY = process.env.USER_KEY
export const ADMIN_KEY = process.env.USER_ADMIN