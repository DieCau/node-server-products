import bcrypt from "bcrypt";

// function que compara los 2 passwords 
// Devuelve T o F
export const comparePasswords = async (userPassword, reqPassword) => {

  // En "compare" 1º paso el pass que viene en la peticion y 2º el pass hasheado 
  const checkPasswords = await bcrypt.compare(reqPassword, userPassword);
  return checkPasswords;
};