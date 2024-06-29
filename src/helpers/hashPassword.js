// Importar bcrypt
import bcrypt from "bcrypt";

// Este entero determina la complejidad y el tiempo del encriptado
const saltRounds = 10

// Funcion que hashea el password 
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds)
    return bcrypt.hash(password, salt);  
}

// File que se importa en user.controllers.js